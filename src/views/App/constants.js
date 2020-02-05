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
    username: "tomcat",
    password: "TomCat",
    accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzc5YWQxY2M5M2MwNTNjMDdlZWY0ZCIsImlhdCI6MTU4MDcwMzU4NywiZXhwIjoxNTgwNzE3OTg3fQ.5U1wzo95l_wUpAwH8plU9MwJb2H_7S6K7btobIS-WDM",
    isAdmin: false,
    forumName: "",
    forumId: "",
    topicName: "",
    topicId: "",
};
