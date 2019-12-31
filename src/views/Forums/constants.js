/*
action types 
*/

export const UPDATE_FORUMS_START = "update_forums_start";
export const UPDATE_FORUMS_SUCCESS = "update_forums_success";
export const UPDATE_FORUMS_FAILURE = "update_forums_failure";

export const TOGGLE_FORUMS_SORTING_METHOD = "toggle_forums_sorting_method";
export const TOGGLE_FORUMS_FILTERING_METHOD = "toggle_forums_filtering_method";

export const FORUMS_SORTING_METHODS = {
    name: {
        asc: "by_name_asc",
        des: "by_name_des"
    }
};

export const FORUMS_FILTERING_METHODS = {
    category: "by_category",
    tag: "by_tag"
};

/*
initial state
*/

export const INITIAL_FORUMS_STATE = {
    forumList: [],
    sortingMethod: FORUMS_SORTING_METHODS.name.asc,
    filteringMethod: "",
    isLoading: true,
    error: null
};
