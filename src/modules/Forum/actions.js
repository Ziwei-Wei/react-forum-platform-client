import _ from "lodash";
import { fetchDiscussions } from "./utility";

/*
action types 
*/
export const START_FETCHING_DISCUSSIONS = "START_FETCHING_DISCUSSIONS";
export const FETCHING_DISCUSSIONS_SUCCESS = "FETCHING_DISCUSSIONS_SUCCESS";
export const FETCHING_DISCUSSIONS_FAILURE = "FETCHING_DISCUSSIONS_FAILURE";

export const TOGGLE_SORTING_METHOD = "TOGGLE_SORTING_METHOD";
export const INVALID_FORUM = "INVALID_FORUM";

export const SORTING_METHOD = {
    BY_DATE_ASC: "BY_DATE_ASC",
    BY_DATE_DES: "BY_DATE_DES",
    BY_VIEW_ASC: "BY_VIEW_ASC",
    BY_VIEW_DES: "BY_VIEW_DES"
};

/**
 * find the id for current forum
 * @param  {Object} state   state object
 * @param  {String} forum   current forum
 * @return {Number}         forum id
 */
const findForumId = (state, forum) => {
    const { forums } = state.app;
    const forumId = _.find(forums, { forum_slug: forum });

    if (forumId) {
        return forumId._id;
    } else {
        return null;
    }
};

/**
 * action to fetch forum discussions
 * @param  {String}  forum               current forum slug
 * @param  {Boolean} feedChanged         if the feed has been changed, default is false
 * @param  {String}  sortingMethod       define the sorting method, default is 'date'
 * @param  {Boolean} sortingChanged      if user chagned the sorting method
 * @return {thunk}
 */
export const getDiscussions = (
    forumId,
    feedChanged = false,
    sortingChanged = false
) => {
    return (dispatch, getState) => {
        const sortingMethod = getState().feed.sortingMethod;

        // show the loading message when user change forum or change sorting method
        if (feedChanged || sortingChanged)
            dispatch({ type: START_FETCHING_DISCUSSIONS });

        if (!forumId) {
            dispatch({ type: INVALID_FORUM });
        } else {
            // start fetching discussions
            fetchDiscussions(forumId, sortingMethod).then(
                data =>
                    dispatch({
                        type: FETCHING_DISCUSSIONS_SUCCESS,
                        payload: data.data
                    }),
                error => dispatch({ type: FETCHING_DISCUSSIONS_FAILURE })
            );
        }
    };
};

/**
 * action to fetch forum pinned discussions
 * @param  {String}  forum                current forum
 * @param  {Boolean} [feedChanged=false]  if the feed has been changed
 * @return {thunk}
 */
export const getPinnedDiscussions = (forumId, feedChanged) => {
    return (dispatch, getState) => {
        // show the loading message when user change forum
        if (feedChanged) dispatch({ type: START_FETCHING_PINNED_DISCUSSIONS });

        if (!forumId) {
            dispatch({ type: INVALID_FORUM });
        } else {
            // start fetching pinned discussions
            return fetchPinnedDiscussions(forumId).then(
                data =>
                    dispatch({
                        type: FETCHING_PINNED_DISCUSSIONS_SUCCESS,
                        payload: data.data
                    }),
                error => {
                    console.log(error);
                    dispatch({ type: FETCHING_PINNED_DISCUSSIONS_FAILURE });
                }
            );
        }
    };
};

/**
 * Update sorting method
 * @param  {String} method
 * @return {action}
 */
export const updateSortingMethod = method => {
    return { type: UPDATE_SORTING_METHOD, payload: method };
};
