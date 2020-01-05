import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

import TopicList from "components/Topic/List";
import TopicListController from "components/Topic/ListController";

import {
    INIT_TOPICS,
    UPDATE_TOPICS_START,
    UPDATE_TOPICS_SUCCESS,
    UPDATE_TOPICS_FAILURE,
    TOGGLE_TOPICS_SORT_METHOD,
    TOPICS_SORT_METHODS
} from "./constants";

const Topics = () => {
    const params = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const forumId = useSelector(state => state.topics.forumId);
    const forumName = useSelector(state => state.topics.forumName);
    const sortMethod = useSelector(state => state.topics.sortMethod);
    const topicList = useSelector(state => state.topics.topicList);

    const update = async () => {
        try {
            dispatch({ type: UPDATE_TOPICS_START });

            const res = await axios.get(
                `/api/forum/${forumId}/topic?sort_method=${sortMethod}`
            );

            dispatch({
                type: UPDATE_TOPICS_SUCCESS,
                topicList: res.data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_TOPICS_FAILURE,
                error: error.message
            });
        }
    };

    const initTopics = () => {
        dispatch({
            type: INIT_TOPICS,
            forumName: params.forum,
            forumId: location.forumId
        });
        update();
    };

    const updateTopics = () => {
        update();
    };

    const toggleSortMethod = newMethod => {
        dispatch({
            type: TOGGLE_TOPICS_SORT_METHOD,
            sortMethod: newMethod
        });
    };

    useEffect(initTopics, []);
    useEffect(updateTopics, [sortMethod]);

    return (
        <>
            <TopicListController
                sortTargetToMethod={TOPICS_SORT_METHODS}
                toggleSortingMethod={toggleSortMethod}
            />
            <TopicList items={topicList} forumId={forumId} />
        </>
    );
};

export default Topics;
