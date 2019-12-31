import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import TopicTitle from "components/Topic/Title";
import ReplyList from "components/Reply/ReplyList";

import {
    INIT_DISCUSSION,
    UPDATE_DISCUSSION_START,
    UPDATE_DISCUSSION_SUCCESS,
    UPDATE_DISCUSSION_FAILURE
} from "./constants";

const Discussion = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const discussion = useSelector(state => state.discussion);

    const initDiscussion = async () => {
        dispatch({
            type: INIT_DISCUSSION,
            forumName: params.forum,
            topicName: params.topic
        });
        await updateDiscussion();
    };

    const updateDiscussion = async () => {
        try {
            dispatch({ type: UPDATE_DISCUSSION_START });

            const res = await axios.get(
                `/api/forum/${params.forum}/${params.topic}`
            );

            dispatch({
                type: UPDATE_DISCUSSION_SUCCESS,
                replyList: res.data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_DISCUSSION_FAILURE,
                error: error.message
            });
        }
    };

    useEffect(initDiscussion, []);

    return (
        <div>
            <TopicTitle />
            <ReplyList replies={discussion.replyList} />
        </div>
    );
};

export default Discussion;
