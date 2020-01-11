import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

import Title from "components/Topic/Title";
import List from "components/Reply/List";
import Header from "components/Header";
import Loading from "components/Loading";

import RichTextEditor from "components/Editor/RichTextEditor";

import styles from "./index.module.css";

import {
    INIT_DISCUSSION,
    UPDATE_DISCUSSION_START,
    UPDATE_DISCUSSION_SUCCESS,
    UPDATE_DISCUSSION_FAILURE
} from "./constants";

const Discussion = () => {
    const params = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const discussion = useSelector(state => state.discussion);

    const init = async () => {
        dispatch({
            type: INIT_DISCUSSION,
            forumId: location.state.forumId,
            topicId: location.state.topicId
        });
        await update();
    };

    const update = async () => {
        try {
            dispatch({ type: UPDATE_DISCUSSION_START });

            const replies = await axios.get(
                `/api/forum/${location.state.forumId}/topic/${location.state.topicId}/reply`
            );

            dispatch({
                type: UPDATE_DISCUSSION_SUCCESS,
                replyList: replies.data,
                title: location.state.title,
                category: location.state.category,
                tags: location.state.tags,
                updatedAt: location.state.updatedAt
            });
        } catch (error) {
            dispatch({
                type: UPDATE_DISCUSSION_FAILURE,
                error: error.message
            });
        }
    };

    const initDiscussion = () => {
        init();
    };

    useEffect(initDiscussion, []);

    return (
        <>
            <Header
                address={"./" + params.forumName + "/" + params.topicName}
            />
            {discussion.isLoading === true && <Loading />}
            {discussion.isLoading === false && (
                <div className={styles.title}>
                    <Title
                        forumId={discussion.forumId}
                        title={discussion.title}
                        category={discussion.category}
                        tags={discussion.tags}
                        updatedAt={discussion.updatedAt}
                    />
                    <List items={discussion.replyList} />
                </div>
            )}
            {discussion.isLoading === false && (
                <div className={styles.editor}>
                    <RichTextEditor />
                </div>
            )}
        </>
    );
};

export default Discussion;
