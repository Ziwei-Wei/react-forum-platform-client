/*
action types 
*/

export const INIT_USER = "init_user";

export const UPDATE_USER_START = "update_user_start";
export const UPDATE_USER_SUCCESS = "update_user_success";
export const UPDATE_USER_FAILURE = "update_user_failure";

/*
initial state
*/

export const INITIAL_USER_STATE = {
    username: null,
    email: null,
    avatarUrl: null,
    topicList: [],
    replyList: [],
    isLoading: true,
    error: null
};
