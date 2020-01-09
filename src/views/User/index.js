import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import UserProfile from "components/User/Profile";
import TopicList from "components/Topic/List";
import ReplyList from "components/Reply/List";

import {
    INIT_USER,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
} from "./constants";

const User = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const initUser = async () => {
        dispatch({
            type: INIT_USER,
            username: params.user
        });
        await updateUser();
    };

    const updateUser = async () => {
        try {
            dispatch({ type: UPDATE_USER_START });

            const res = await axios.get(`/api/user/${params.user}`);

            dispatch({
                type: UPDATE_USER_SUCCESS,
                ...res.data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_USER_FAILURE,
                error: error.message
            });
        }
    };

    useEffect(initUser, []);

    return (
        <div>
            <UserProfile />
            <TopicList />
            <ReplyList />
        </div>
    );
};

export default User;
