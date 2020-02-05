import React, { useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import Bulletin from "components/Bulletin";
import Loading from "components/Loading";

import ForumList from "components/Forum/List";
import ForumListController from "components/Forum/ListController";

import ForumToolBar from "components/Forum/ForumToolBar"

import styles from "./index.module.css";

import {
    FORUMS_SORTING_METHODS,
    FORUMS_FILTERING_METHODS,
    UPDATE_FORUMS_START,
    UPDATE_FORUMS_SUCCESS,
    UPDATE_FORUMS_FAILURE,
    TOGGLE_FORUMS_SORTING_METHOD,
    TOGGLE_FORUMS_FILTERING_METHOD
} from "./constants";

const Forums = () => {
    const dispatch = useDispatch();
    const filteringMethod = useSelector(state => state.forums.filteringMethod);
    const sortingMethod = useSelector(state => state.forums.sortingMethod);
    const forumList = useSelector(state => state.forums.forumList);
    const isLoading = useSelector(state => state.forums.isLoading);
    const accessToken = useSelector(state => state.app.accessToken);

    const toggleSortMethod = newMethod => {
        dispatch({
            type: TOGGLE_FORUMS_SORTING_METHOD,
            sortingMethod: newMethod
        });
        update()
    };

    const updateForums = async () => {
        try {
            dispatch({ type: UPDATE_FORUMS_START });

            const res = await axios.get(
                `/api/forum?sorting_method=${sortingMethod}&filtering_method=${filteringMethod}`
            );

            dispatch({
                type: UPDATE_FORUMS_SUCCESS,
                forumList: res.data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_FORUMS_FAILURE,
                error: error.message
            });
        }
    };

    const update = () => {
        updateForums();
    };

    const webFrontPage = [
        {
            type: "paragraph",
            children: [{ text: "home" }]
        }
    ];


    useEffect(update, [])

    return (
        <div className={styles.container}>
            <Bulletin value={webFrontPage} />
            <ForumToolBar url={`/api/forum`} accessToken={accessToken} onNewForum={update} />
            <ForumListController
                forumSortMethods={FORUMS_SORTING_METHODS.name}
                toggleSortMethod={toggleSortMethod}
            />
            {isLoading === true && <Loading />}
            <ForumList isLoading={isLoading} forums={forumList} />
        </div>
    );
};

export default Forums;
