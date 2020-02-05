/*
action types 
*/
export const UPDATE_APP_AUTH = "update_app_auth";
export const UPDATE_APP_TOKEN = "update_app_token";
export const UPDATE_APP_ADDRESS = "update_app_address";

/*
initial state
*/

export const INITIAL_APP_STATE = {
    username: "",
    password: "",
    accessToken: "",
    isAdmin: false,
    forumName: "",
    forumId: "",
    topicName: "",
    topicId: "",
};
