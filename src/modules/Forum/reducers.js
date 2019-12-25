import {
    START_FETCHING_DISCUSSIONS,
    STOP_FETCHING_DISCUSSIONS,
    FETCHING_DISCUSSIONS_SUCCESS,
    FETCHING_DISCUSSIONS_FAILURE,
    UPDATE_SORTING_METHOD,
    INVALID_FORUM,
    SORTING_METHOD
} from "./actions";

const initialState = {
    isFetchingData: true,
    discussionList: [],
    sortingMethod: SORTING_METHOD.BY_DATE_DES,
    error: null
};

export const forumReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING_DISCUSSIONS:
            return Object.assign({}, state, {
                isFetchingData: true,
                error: null
            });

        case STOP_FETCHING_DISCUSSIONS:
            return Object.assign({}, state, {
                isFetchingData: false
            });

        case FETCHING_DISCUSSIONS_SUCCESS:
            return Object.assign({}, state, {
                discussions: action.payload,
                isFetchingData: false,
                error: null
            });

        case FETCHING_DISCUSSIONS_FAILURE:
            return Object.assign({}, state, {
                isFetchingData: false,
                error: "Unable to find any discussion at the moment."
            });

        case UPDATE_SORTING_METHOD:
            return Object.assign({}, state, {
                sortingMethod: action.payload
            });

        case INVALID_FORUM:
            return Object.assign({}, state, {
                error: "Sorry, couldn't find the forum.",
                isFetchingData: false
            });

        default:
            return state;
    }
};
