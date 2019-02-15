import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import fetchData from "./reducers";
import thunk from "redux-thunk";
import App from './components/App';
import fetchAPI from './components/fetchAPI';
import NotFound from './components/NotFound';

let store = createStore(fetchData, applyMiddleware(thunk));

const router = (
    <Provider store={store}>
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/fetch" component={fetchAPI} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    </Provider>
)

export default router;
