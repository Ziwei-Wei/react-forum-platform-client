/*
action types 
*/
export const UPDATE_TOPICS_START = "update_topics_start";
export const UPDATE_TOPICS_SUCCESS = "update_topics_success";
export const UPDATE_TOPICS_FAILURE = "update_topics_failure";

export const TOGGLE_TOPICS_SORT_METHOD = "toggle_topics_sorting_method";

export const TOPICS_SORT_METHODS = {
    name: {
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
    topicList: [],
    sortMethod: TOPICS_SORT_METHODS.name.asc,
    isLoading: true,
    error: null
};
