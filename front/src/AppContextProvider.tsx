import React, {useCallback, useEffect, useState} from "react";
import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {notification} from "antd";
import {get} from "lodash";

export type AppContextState = {}
export const AppContext = React.createContext([{}, (p: { context: { customer: undefined, product: undefined, account: undefined, token: undefined, reload: () => {}, axios: AxiosInstance } }) => {
}]);

export class NotFoundException extends Error {
    constructor() {
        super("Not Found");
        // @ts-ignore
        this.response = {status: 404}
    }
}

export const AppContextProvider = (props: any) => {
    // let savedState = {}
    // try {
    //     // @ts-ignore
    //     savedState = JSON.parse(localStorage.getItem("state"))
    // }catch (e) {
    //
    // }
    const [state, setState] = useState({
        customer: undefined, product: undefined, account: undefined, token: props.token, reload: () => {
        }, axios: axios.create()
    });

    const axiosInstance = state.axios;
    const setInterceptors = useCallback((axiosInstance: any) => {
        axiosInstance.interceptors.request.use(function (config: AxiosRequestConfig) {
            // Do something before request is sent
            config = {
                ...config,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem("token"),
                    accountId: get(state, 'account.id')
                },
                baseURL: "https://api.mgpmasks.com/"
            }
            return config;
        }, function (error: any) {
            // Do something with request error
            return Promise.reject(error);
        });


        axiosInstance.interceptors.response.use(function (response: AxiosResponse) {
            return response;
        }, function (error: AxiosError) {
            if (401 === get(error, 'response.status') || 403 === get(error, 'response.status')) {
                notification["warning"]({
                    message: "Session Expired",
                    description: "Your session has expired. Would you like to be redirected to the login page?",
                    onClose: () => {
                        localStorage.removeItem('token');
                        // @ts-ignore
                        window.location = '/login'
                    },
                });
            } else if (404 === get(error, 'response.status')) {
                return Promise.reject(new NotFoundException());
            } else if (408 === get(error, 'response.status')) {
                throw error
            } else if (409 !== get(error, 'response.status')) {
                notification["error"]({
                    key: 'httpError',
                    message: 'Oups!',
                    description:
                        'Hmmmm, an error occured!',
                });
                return Promise.reject(error);
            } else {
                return Promise.reject(error);
            }
        })
    }, [state])
    setInterceptors(axiosInstance);

    const loadUser = useCallback(async () => {
        setState({
            ...state,
            token: props.token,
            reload: loadUser,
            axios: axiosInstance
        })
    }, [props.token, setState, axiosInstance, state])

    useEffect(() => {
        if ((!state.customer || !state.account) && state.token) {
            loadUser().then(r => r)
        }
        setInterceptors(axiosInstance)
    }, [state, loadUser, axiosInstance, setInterceptors])
    // if (!state.user || !state.account) {
    //     return <LoadingContainer><Spin/></LoadingContainer>
    // }
    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    );
};
