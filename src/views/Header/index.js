import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useLocation } from "react-router-dom";

import HeaderBar from "components/Header";

import { UPDATE_APP_AUTH } from "views/App/constants";

const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const username = useSelector(state => state.app.username, shallowEqual);
    const accessToken = useSelector(state => state.app.accessToken);

    return (
        <HeaderBar
            username={username}
            address={location.pathname.replace(/(\/forum)|(\/topic)/g, "")}
            setToken={(username, password, accessToken) => {
                dispatch({
                    type: UPDATE_APP_AUTH,
                    username: username,
                    password: password,
                    accessToken: accessToken
                });
            }}
            accessToken={accessToken}
        />
    );
};

export default Header;
