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

const webFrontPage = [
    {
        "type": "paragraph",
        "children": [
            {
                "text": "Welcome! This is a forum platform app built with react, redux, some react-bootstrap component, plus a customized Rich Text Editor in Slate.js. A full demo will be hosted later!🧙💎👍",
                "bold": true
            }
        ]
    },
    {
        "type": "numbered-list",
        "children": [
            {
                "type": "list-item",
                "children": [
                    {
                        "text": "Finished functionalities: ✌️✌️✌️🎉"
                    }
                ]
            },
            {
                "type": "list-item",
                "children": [
                    {
                        "text": "1. core forum functionality like navigation, activity counter, categories, authentication, etc."
                    }
                ]
            },
            {
                "type": "list-item",
                "children": [
                    {
                        "text": "2. forums page/topics page/discussion page/profile page"
                    }
                ]
            },
            {
                "type": "list-item",
                "children": [
                    {
                        "text": "3. rich tect editor for reply/bulletin/forum/topic editing with formating and emojis"
                    }
                ]
            },
            {
                "type": "list-item",
                "children": [
                    {
                        "text": "Future functionalities: 😱😋"
                    }
                ]
            },
            {
                "type": "list-item",
                "children": [
                    {
                        "text": "1. full text search in the forums"
                    }
                ]
            },
            {
                "type": "list-item",
                "children": [
                    {
                        "text": "2. profile editor"
                    }
                ]
            },
            {
                "type": "list-item",
                "children": [
                    {
                        "text": "3. support image and outside links in discussion"
                    }
                ]
            }
        ]
    }
];

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
