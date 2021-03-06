import {
    INITIAL_APP_STATE,
    UPDATE_APP_ADDRESS,
    UPDATE_APP_AUTH,
    UPDATE_APP_TOKEN
} from "./constants";

const appReducer = (state = INITIAL_APP_STATE, action) => {
    switch (action.type) {
        case UPDATE_APP_ADDRESS:
            console.log("here")
            return {
                ...state,
                isAdmin: action.isAdmin,
                forumName: action.forumName,
                forumId: action.forumId,
                topicName: action.topicName,
                topicId: action.topicId
            };
        case UPDATE_APP_AUTH:
            return {
                ...state,
                username: action.username,
                password: action.password,
                accessToken: action.accessToken,
                isAdmin: action.isAdmin,
            };
        case UPDATE_APP_TOKEN:
            return {
                ...state,
                accessToken: action.accessToken
            };
        default:
            return state;
    }
};

export default appReducer;
