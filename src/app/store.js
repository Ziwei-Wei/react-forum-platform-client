import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import discussionReducer from "views/Discussion/reducers";
import forumsReducer from "views/Forums/reducers";
import topicsReducer from "views/Topics/reducers";
import userReducer from "views/User/reducers";

// root reducer for app
const rootReducer = combineReducers({
    user: userReducer,
    topics: topicsReducer,
    forums: forumsReducer,
    discussion: discussionReducer
});

// logger middleware
const logger = store => next => action => {
    console.group(action.type);
    console.info("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();
    return result;
};

// create enhancers
const enhancers = compose(applyMiddleware(thunk, logger));

// application store
const appStore = createStore(rootReducer, enhancers);

export default appStore;
