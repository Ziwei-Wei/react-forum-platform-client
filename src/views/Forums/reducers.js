import {
    INITIAL_FORUMS_STATE,
    UPDATE_FORUMS_START,
    UPDATE_FORUMS_SUCCESS,
    UPDATE_FORUMS_FAILURE,
    TOGGLE_FORUMS_SORTING_METHOD,
    TOGGLE_FORUMS_FILTERING_METHOD
} from "./constants";

const forumsReducer = (state = INITIAL_FORUMS_STATE, action) => {
    switch (action.type) {
        case UPDATE_FORUMS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case UPDATE_FORUMS_SUCCESS:
            return {
                ...state,
                forumList: action.forumList,
                isLoading: false,
                error: null
            };
        case UPDATE_FORUMS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case TOGGLE_FORUMS_SORTING_METHOD:
            return {
                ...state,
                sortingMethod: action.sortingMethod
            };

        case TOGGLE_FORUMS_FILTERING_METHOD:
            return {
                ...state,
                filteringMethod: action.filteringMethod
            };
        default:
            return state;
    }
};

export default forumsReducer;
