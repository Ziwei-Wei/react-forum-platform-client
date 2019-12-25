import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store";

import Header from "./header/Header";
import NotFound from "./utility/NotFound";
import Discussion from "./discussion/Discussion";
import Topics from "./topics/Topics";
import Home from "./home/Home";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
    <>
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/:forum" component={Topics} />
                    <Route path="/:forum/:discussion" component={Discussion} />
                    <Route path="/user/:user" component={Discussion} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </>
);

export default App;
