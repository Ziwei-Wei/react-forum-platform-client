import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import UserProfile from "components/Profile";

import {
    INIT_USER,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
} from "./constants";

const Profile = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const accessToken = useSelector(state => state.app.accessToken);

    const initUser = async () => {
        dispatch({
            type: INIT_USER,
            username: params.username
        });
        await updateUser();
    };

    const updateUser = async () => {
        try {
            dispatch({ type: UPDATE_USER_START });

            console.log(params);

            const res = await axios.get(`/api/user/${params.username}`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });

            if (res) {
                dispatch({
                    type: UPDATE_USER_SUCCESS,
                    email: res.data.email,
                    avatarUrl: res.data.avatarUrl,
                    topicList: res.data.topics,
                    replyList: res.data.replies
                });
                console.log("this is user");
                console.log(user);
            }
        } catch (error) {
            dispatch({
                type: UPDATE_USER_FAILURE,
                error: error.message
            });
        }
    };

    const init = () => {
        initUser();
    };

    useEffect(init, []);

    return (
        <UserProfile
            name={user.username}
            email={user.email}
            avatarUrl={user.avatarUrl}
            topics={user.topicList}
            replies={user.replyList}
            isLoading={user.isLoading}
        />
    );
};

export default Profile;
