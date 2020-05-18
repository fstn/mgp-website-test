import React, {useCallback, useContext, useRef} from 'react';
import styled from 'styled-components'
import PinField from "react-pin-field";
import {AppContext, NotFoundException} from "../AppContextProvider";
import "./Pin.css"
import {useSafeCall} from "../utils/call";
import {notification} from "antd";


// language=LESS prefix=*{ suffix=}
// language=LESS prefix=*{ suffix=}
const Style = styled.div`

    margin-top: 1em;

    .ant-card-body > * {
      margin: 1em;
    }

    .ant-input {
      width: calc(100% - 2em);
    }

    .pin-container {
      display: flex;
      justify-content: space-between;
    }

    .a-reactPinField__input {
      width: 34px;
      height: 34px;
    }
`

function Pin({validated, setValidated, setTeamOrder, defaultValue}: { validated: boolean, setValidated: Function, setTeamOrder: Function, defaultValue?: string[] }) {
    const pin = useRef(null);
    const [context] = useContext<any>(AppContext);
    const [loadOrderLoading, loadOrder] = useSafeCall(
        useCallback(async (code: string) => {
            //loadOrder by code
            try {
                const teamOrder = (await context.axios.get(`public/team-orders/by-code/${code}`, {catchError: false}))?.data
                setValidated(!!teamOrder)
                setTeamOrder(teamOrder)
            } catch (e) {
                if (e instanceof NotFoundException) {
                    notification["error"]({
                        message: "Votre code est invalide",
                        description: "Le code saisie est invalide",
                    });
                    (pin?.current || []).forEach((input: any) => (input.value = ""))
                } else if (e.response.status == 408) {
                    notification["error"]({
                        message: "Cette commande est terminée",
                        description: <a href={"/"}>Vous pouvez joindre une autre commande ici</a>,
                    });
                }
            }

        }, [context.axios, setTeamOrder, setValidated]))
    return (
        // <Modal visible={visible}
        //        closable={false}
        //        cancelButtonProps={{style: {display: "none"}}}
        //        okButtonProps={{style: {display: "none"}}}>
        <Style>
            <PinField defaultValue={defaultValue} ref={pin}
                      disabled={loadOrderLoading || validated} length={6}
                      className={validated ? "validated" : ""}
                      onComplete={loadOrder}/>
        </Style>
        // </Modal>
    );
}

export default Pin;
