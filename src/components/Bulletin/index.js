import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    RESET_DISCUSSION,
    UPDATE_DISCUSSION_START,
    UPDATE_DISCUSSION_SUCCESS,
    UPDATE_DISCUSSION_FAILURE
} from "./actions";

const Bulletin = () => {
    const dispatch = useDispatch();
    const discussion = useSelector(state => state.discussion);

    // component did mount
    useEffect(async () => {
        try {
            dispatch({ type: UPDATE_DISCUSSION_START });

            const res = await axios.get(
                `/api/forum/${topics.forumName}/topic?sorting_method=${topics.sortingMethod}`
            );

            dispatch({
                type: UPDATE_DISCUSSION_SUCCESS,
                topicName: res.data.topicName,
                replyList: res.data.replyList
            });
        } catch (error) {
            dispatch({
                type: UPDATE_DISCUSSION_FAILURE,
                error: error.message
            });
        }
    }, []);

    return (
        <div>
            <TopicListController />
            <TopicList topics={topics.topicList} />
        </div>
    );
};

export default Bulletin;
