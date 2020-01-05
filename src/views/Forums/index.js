import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import ForumList from "components/Forum/List";
import ForumListController from "components/Forum/ListController";

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

    const update = async () => {
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

    const initForums = () => {
        update();
    };

    const updateForums = () => {
        update();
    };

    const toggleSortMethod = newMethod => {
        dispatch({
            type: TOGGLE_FORUMS_SORTING_METHOD,
            sortingMethod: newMethod
        });
    };

    useEffect(initForums, []);
    useEffect(updateForums, [sortingMethod]);

    return (
        <>
            <ForumListController
                forumSortMethods={FORUMS_SORTING_METHODS.name}
                toggleSortMethod={toggleSortMethod}
            />
            <ForumList forums={forumList} />
        </>
    );
};

export default Forums;
