import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import appStore from "app/store";
import App from "views/App";

import "bootstrap/dist/css/bootstrap.min.css";

const Client = () => (
    <Provider store={appStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

export default Client;
