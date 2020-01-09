import {
    INITIAL_DISCUSSION_STATE,
    INIT_DISCUSSION,
    UPDATE_DISCUSSION_START,
    UPDATE_DISCUSSION_SUCCESS,
    UPDATE_DISCUSSION_FAILURE
} from "./constants";
import { act } from "react-dom/test-utils";

const discussionReducer = (state = INITIAL_DISCUSSION_STATE, action) => {
    switch (action.type) {
        case INIT_DISCUSSION:
            return {
                ...state,
                forumId: action.forumId,
                topicId: action.topicId
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
                title: action.title,
                category: action.category,
                tags: action.tags,
                updatedAt: action.updatedAt,
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
