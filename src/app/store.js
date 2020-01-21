import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import appReducer from "views/App/reducers";
import discussionReducer from "views/Discussion/reducers";
import forumsReducer from "views/Forums/reducers";
import topicsReducer from "views/Topics/reducers";
import userReducer from "views/Profile/reducers";

// root reducer for app
const rootReducer = combineReducers({
    app: appReducer,
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

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;

// create enhancers
const enhancers = composeEnhancers(applyMiddleware(thunk, logger));

// application store
const appStore = createStore(rootReducer, enhancers);

export default appStore;
