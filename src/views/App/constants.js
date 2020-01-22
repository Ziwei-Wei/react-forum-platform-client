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
    username: "TomCat",
    password: "TomCat",
    accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMGZlNzYxYjA3NzMwN2YzMGVkNmU1ZSIsImlhdCI6MTU3OTY5MDAxMywiZXhwIjoxNTc5NzA0NDEzfQ.OfP7kOSg11UGSx0Q3I5bK_mHErw_aPKF4lfETyaBLUA",
    address: "",
    forumName: "",
    forumId: "",
    topicName: "",
    topicId: ""
};
