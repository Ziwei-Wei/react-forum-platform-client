import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import TopicList from "components/Topic/List";
import TopicListController from "components/Topic/Controller";

import {
    INIT_TOPICS,
    UPDATE_TOPICS_START,
    UPDATE_TOPICS_SUCCESS,
    UPDATE_TOPICS_FAILURE,
    TOGGLE_TOPICS_SORTING_METHOD,
    TOPICS_SORTING_METHODS
} from "./constants";

const Topics = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const topics = useSelector(state => state.topics);

    const initTopics = async () => {
        dispatch({ type: INIT_TOPICS, forumName: params.forum });
        await updateTopics();
    };

    const updateTopics = async () => {
        try {
            dispatch({ type: UPDATE_TOPICS_START });

            const res = await axios.get(
                `/api/forum/${params.forum}/topic?sorting_method=${topics.sortingMethod}`
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

    const toggleSortingMethod = newMethod => {
        dispatch({
            type: TOGGLE_TOPICS_SORTING_METHOD,
            sortingMethod: newMethod
        });
    };

    useEffect(initTopics, []);
    useEffect(updateTopics, [topics.sortingMethod]);

    return (
        <div>
            <TopicListController
                sortingTargetToMethod={TOPICS_SORTING_METHODS}
                toggleSortingMethod={toggleSortingMethod}
            />
            <TopicList topics={topics.topicList} />
        </div>
    );
};

export default Topics;
