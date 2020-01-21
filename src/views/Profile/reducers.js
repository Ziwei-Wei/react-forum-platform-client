import {
    INITIAL_USER_STATE,
    INIT_USER,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
} from "./constants";

const userReducer = (state = INITIAL_USER_STATE, action) => {
    switch (action.type) {
        case INIT_USER:
            return {
                ...state,
                username: action.username
            };
        case UPDATE_USER_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                email: action.email,
                avatarUrl: action.avatarUrl,
                topicList: action.topicList,
                replyList: action.replyList,
                isLoading: false,
                error: null
            };
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default userReducer;
