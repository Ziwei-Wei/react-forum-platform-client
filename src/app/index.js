import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import appStore from "app/store";
import Forums from "views/Forums";
import Topics from "views/Topics";
import Discussion from "views/Discussion";
import User from "views/User";
import NotFound from "views/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "app/index.module.css";

const App = () => (
    <>
        <Provider store={appStore}>
            <BrowserRouter>
                <div className={styles.container}>
                    <Switch>
                        <Route exact path="/">
                            <Forums />
                        </Route>
                        <Route exact path="/:forumName">
                            <Topics />
                        </Route>
                        <Route exact path="/:forumName/:topicName">
                            <Discussion />
                        </Route>
                        <Route exact path="/user/:username">
                            <User />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    </>
);

export default App;
