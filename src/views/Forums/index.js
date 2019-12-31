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
    const forums = useSelector(state => state.forums);

    const initForums = async () => {
        await updateForums();
    };

    const updateForums = async () => {
        try {
            dispatch({ type: UPDATE_FORUMS_START });

            const res = await axios.get(
                `/api/forum?sorting_method=${forums.sortingMethod}&filtering_method=${forums.filteringMethod}`
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

    const toggleSortingMethod = newMethod => {
        dispatch({
            type: TOGGLE_FORUMS_SORTING_METHOD,
            sortingMethod: newMethod
        });
    };

    const toggleFilteringMethod = newMethod => {
        dispatch({
            type: TOGGLE_FORUMS_FILTERING_METHOD,
            filteringMethod: newMethod
        });
    };

    useEffect(initForums, []);
    useEffect(updateForums, [forums.sortingMethod]);
    useEffect(updateForums, [forums.filteringMethod]);

    return (
        <>
            <ForumListController
                sortingTargetToMethod={FORUMS_SORTING_METHODS}
                filteringTargetToMethod={FORUMS_FILTERING_METHODS}
                toggleSortingMethod={toggleSortingMethod}
                toggleFilteringMethod={toggleFilteringMethod}
            />
            <ForumList forums={forums.forumList} />
        </>
    );
};

export default Forums;
