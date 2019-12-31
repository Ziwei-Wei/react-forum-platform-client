/*
action types 
*/

export const INIT_TOPICS = "init_topics";

export const UPDATE_TOPICS_START = "update_topics_start";
export const UPDATE_TOPICS_SUCCESS = "update_topics_success";
export const UPDATE_TOPICS_FAILURE = "update_topics_failure";

export const TOGGLE_TOPICS_SORTING_METHOD = "toggle_topics_sorting_method";

export const TOPICS_SORTING_METHODS = {
    topic: {
        asc: "by_name_asc",
        des: "by_name_des"
    },
    views: {
        asc: "by_views_asc",
        des: "by_views_des"
    },
    replies: {
        asc: "by_replies_asc",
        des: "by_replies_des"
    },
    activity: {
        asc: "by_date_asc",
        des: "by_date_des"
    }
};

/*
initial state
*/

export const INITIAL_TOPICS_STATE = {
    forumName: null,
    topicList: [],
    sortingMethod: TOPICS_SORTING_METHODS.topic.asc,
    isLoading: true,
    error: null
};
