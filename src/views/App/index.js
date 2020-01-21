import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "views/Header";
import Forums from "views/Forums";
import Topics from "views/Topics";
import Discussion from "views/Discussion";
import User from "views/Profile";
import NotFound from "views/NotFound";

import styles from "./index.module.css";

const App = () => (
    <div className={styles.container}>
        <Header />
        <Switch>
            <Route exact path="/">
                <Forums />
            </Route>
            <Route exact path="/forum/:forumName">
                <Topics />
            </Route>
            <Route exact path="/forum/:forumName/topic/:topicName">
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
);

export default App;
