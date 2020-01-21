import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import HeaderBar from "components/Header";

import { createAddress } from "utility/utility";

import { UPDATE_APP_AUTH } from "views/App/constants";

const Header = () => {
    const dispatch = useDispatch();
    const [address, setAddress] = useState("./");
    const forumName = useSelector(state => state.app.forumName, shallowEqual);
    const topicName = useSelector(state => state.app.topicName, shallowEqual);
    const username = useSelector(state => state.app.username, shallowEqual);
    const accessToken = useSelector(
        state => state.app.accessToken,
        shallowEqual
    );

    useEffect(() => {
        setAddress(createAddress(forumName, topicName));
    }, [forumName, topicName, username]);

    return (
        <HeaderBar
            username={username}
            address={address}
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
