import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Title from "components/Topic/Title";
import List from "components/Reply/List";
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
    const location = useLocation();
    const dispatch = useDispatch();
    const [trigger, fire] = useState(Date());
    const forumId = useSelector(state => state.discussion.forumId);
    const topicId = useSelector(state => state.discussion.topicId);
    const title = useSelector(state => state.discussion.title);
    const category = useSelector(state => state.discussion.category);
    const updatedAt = useSelector(state => state.discussion.updatedAt);
    const replyList = useSelector(state => state.discussion.replyList);
    const isLoading = useSelector(state => state.discussion.isLoading);
    const tags = useSelector(state => state.discussion.tags);
    const accessToken = useSelector(state => state.app.accessToken);

    const initDiscussion = async () => {
        dispatch({
            type: INIT_DISCUSSION,
            forumId: location.state.forumId,
            topicId: location.state.topicId
        });
    };

    const updateDiscussion = async () => {
        try {
            dispatch({
                type: UPDATE_DISCUSSION_START
            });

            const replies = await axios.get(
                `/api/forum/${location.state.forumId}/topic/${location.state.topicId}/reply`
            );

            const topic = await axios.get(
                `/api/forum/${location.state.forumId}/topic/${location.state.topicId}`
            );

            console.log(replies);

            dispatch({
                type: UPDATE_DISCUSSION_SUCCESS,
                replyList: replies.data,
                title: topic.data.name,
                category: topic.data.category,
                tags: topic.data.tags,
                updatedAt: topic.data.updatedAt
            });
        } catch (error) {
            dispatch({
                type: UPDATE_DISCUSSION_FAILURE,
                error: error.message
            });
        }
    };

    const init = () => {
        initDiscussion();
    };

    const update = () => {
        updateDiscussion();
    };

    useEffect(init, []);
    useLayoutEffect(update, [trigger]);

    return (
        <>
            {isLoading === true && <Loading />}
            {isLoading === false && (
                <div className={styles.title}>
                    <Title
                        forumId={forumId}
                        title={title}
                        category={category}
                        tags={tags}
                        updatedAt={updatedAt}
                    />
                    <List items={replyList} />
                </div>
            )}
            <div className={styles.editor}>
                <RichTextEditor
                    forumId={forumId}
                    topicId={topicId}
                    token={accessToken}
                    update={() => {
                        fire(Date());
                    }}
                />
            </div>
        </>
    );
};

export default Discussion;
