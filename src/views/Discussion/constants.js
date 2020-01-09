/*
action types 
*/

export const INIT_DISCUSSION = "init_discussion";

export const UPDATE_DISCUSSION_START = "update_discussion_start";
export const UPDATE_DISCUSSION_SUCCESS = "update_discussion_success";
export const UPDATE_DISCUSSION_FAILURE = "update_discussion_failure";

/*
initial state
*/

export const INITIAL_DISCUSSION_STATE = {
    forumId: null,
    topicId: null,
    title: "",
    category: "",
    updatedAt: "",
    replyList: [],
    isLoading: true,
    error: null
};
