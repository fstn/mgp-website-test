import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import queryString from "query-string";
import {AppContextProvider} from "./AppContextProvider";

const parsed = queryString.parse(window.location.search);
let token = parsed['token']
if (!token) {
    token = localStorage.getItem('token');
} else {
    localStorage.setItem('token', token + "");
}

(async function () {
    ReactDOM.render(
        <React.StrictMode>
            <AppContextProvider token={token}>
                {/*{token && <App/>}*/}
                {/*{!token && <Unauthorized/>}*/}
                <App/>
            </AppContextProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
})()

