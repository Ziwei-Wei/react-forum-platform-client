import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import {
    getDiscussions,
    getPinnedDiscussions,
    updateSortingMethod
} from "./actions";

import Topics from "../../components/topics/Topics";

const Forum = () => {
    return (
        <>
            <Discussion />
        </>
    );
};

export default connect(
    state => {
        return {
            currentForum: state.app.currentForum,
            currentForumId: () => {
                const currentForumObj = _.find(state.app.forums, {
                    forum_slug: state.app.currentForum
                });
                if (currentForumObj) return currentForumObj._id;
                else return null;
            },
            fetchingDiscussions: state.feed.fetchingDiscussions,
            discussions: state.feed.discussions,
            fetchingPinnedDiscussions: state.feed.fetchingPinnedDiscussions,
            sortingMethod: state.feed.sortingMethod,
            pinnedDiscussions: state.feed.pinnedDiscussions,
            error: state.feed.error
        };
    },
    dispatch => {
        return {
            getDiscussions: (
                currentForumId,
                feedChanged,
                sortingMethod,
                sortingChanged
            ) => {
                dispatch(
                    getDiscussions(
                        currentForumId,
                        feedChanged,
                        sortingMethod,
                        sortingChanged
                    )
                );
            },
            getPinnedDiscussions: (currentForumId, feedChanged) => {
                dispatch(getPinnedDiscussions(currentForumId, feedChanged));
            },
            updateSortingMethod: method => {
                dispatch(updateSortingMethod(method));
            }
        };
    }
)(ForumFeed);
