import {
    INIT_TOPICS,
    INITIAL_TOPICS_STATE,
    UPDATE_TOPICS_START,
    UPDATE_TOPICS_SUCCESS,
    UPDATE_TOPICS_FAILURE,
    TOGGLE_TOPICS_SORT_METHOD
} from "./constants";

const topicsReducer = (state = INITIAL_TOPICS_STATE, action) => {
    switch (action.type) {
        case INIT_TOPICS:
            return {
                ...state,
                forumId: action.forumId,
                forumName: action.forumName
            };
        case UPDATE_TOPICS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case UPDATE_TOPICS_SUCCESS:
            return {
                ...state,
                topicList: action.topicList,
                isLoading: false,
                error: null
            };
        case UPDATE_TOPICS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case TOGGLE_TOPICS_SORT_METHOD:
            return {
                ...state,
                sortMethod: action.sortMethod
            };
        default:
            return state;
    }
};

export default topicsReducer;