import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

import Bulletin from "components/Bulletin";
import Loading from "components/Loading";

import TopicList from "components/Topic/List";
import TopicListController from "components/Topic/ListController";
import TopicToolBar from "components/Topic/TopicToolBar"

import styles from "./index.module.css";

import {
    UPDATE_TOPICS_START,
    UPDATE_TOPICS_SUCCESS,
    UPDATE_TOPICS_FAILURE,
    TOGGLE_TOPICS_SORT_METHOD,
    TOPICS_SORT_METHODS
} from "./constants";

import {
    UPDATE_APP_ADDRESS,
} from "views/App/constants";

const Topics = () => {
    const params = useParams();
    const location = useLocation();
    const dispatch = useDispatch();

    const forumName = useSelector(state => state.app.forumName);
    const forumId = useSelector(state => state.app.forumId);
    const username = useSelector(state => state.app.username);
    const isAdmin = useSelector(state => state.app.isAdmin);
    const accessToken = useSelector(state => state.app.accessToken);

    const sortMethod = useSelector(state => state.topics.sortMethod);
    const topicList = useSelector(state => state.topics.topicList);
    const isLoading = useSelector(state => state.topics.isLoading);
    const [bulletin, setBulletin] = useState(null)

    const handleBulletinChange = (value) => {
        setBulletin(value)
    }

    const handleBulletinSubmit = async () => {
        await axios.post(
            `/api/forum/${location.state.forumId}/bulletin`,
            { bulletin: bulletin }
        );
    }

    const updateTopics = async () => {
        try {
            dispatch({ type: UPDATE_TOPICS_START });

            const resTopic = await axios.get(
                `/api/forum/${location.state.forumId}/topic?sort_method=${sortMethod}`
            );

            const resBulletin = await axios.get(
                `/api/forum/${location.state.forumId}/bulletin`
            );

            if (resBulletin.data.bulletin) {
                setBulletin(resBulletin.data.bulletin)
            }

            console.log("here")
            console.log(bulletin)

            dispatch({
                type: UPDATE_TOPICS_SUCCESS,
                topicList: resTopic.data
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
            type: UPDATE_APP_ADDRESS,
            forumName: params.forumName,
            forumId: location.state.forumId,
            isAdmin: location.state.forumAdmin == username
        })
        updateTopics()
    };

    const toggleSortMethod = newMethod => {
        dispatch({
            type: TOGGLE_TOPICS_SORT_METHOD,
            sortMethod: newMethod
        });
    };

    const init = () => {
        initTopics();
    };

    const update = () => {
        updateTopics();
    };

    useEffect(init, []);

    return (
        <div className={styles.container}>
            <Bulletin value={bulletin} isEditable={isAdmin} onSubmit={handleBulletinSubmit} onChange={handleBulletinChange} />
            <TopicToolBar url={`/api/forum/${forumId}/topic`} accessToken={accessToken} onSubmit={update} />
            <TopicListController
                topicSortMethods={TOPICS_SORT_METHODS}
                toggleSortMethod={toggleSortMethod}
            />
            {isLoading === true && <Loading />}
            <TopicList
                isLoading={isLoading}
                forumName={forumName}
                forumId={forumId}
                items={topicList}
            />
        </div>
    );
};

export default Topics;
