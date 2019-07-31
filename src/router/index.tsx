import React from 'react';
import {Route, Switch} from 'react-router';

import withAuth from '../HOC/withAuth';

import App from '../containers/App';
import Login from '../containers/Login';

const Router = () => (
    <>
        <Switch>
            <Route exact path="/" component={withAuth(App)} />
            <Route path="/login" component={Login} />
        </Switch>
    </>
);

export default Router;