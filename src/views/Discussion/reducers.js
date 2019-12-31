import {
    INITIAL_DISCUSSION_STATE,
    INIT_DISCUSSION,
    UPDATE_DISCUSSION_START,
    UPDATE_DISCUSSION_SUCCESS,
    UPDATE_DISCUSSION_FAILURE
} from "./constants";

const discussionReducer = (state = INITIAL_DISCUSSION_STATE, action) => {
    switch (action.type) {
        case INIT_DISCUSSION:
            return {
                ...state,
                forumName: action.forumName,
                topicName: action.topicName
            };
        case UPDATE_DISCUSSION_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case UPDATE_DISCUSSION_SUCCESS:
            return {
                ...state,
                replyList: action.replyList,
                isLoading: false,
                error: null
            };
        case UPDATE_DISCUSSION_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default discussionReducer;
