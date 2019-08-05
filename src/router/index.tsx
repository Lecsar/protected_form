import React from 'react';
import {Route, Switch} from 'react-router';

import withAuth from '../HOC/withAuth';

import App from '../containers/App';
import Login from '../containers/Login';
import Form from '../containers/Form';

const Router = () => (
    <>
        <Switch>
            <Route exact path="/" component={withAuth(App)} />
            <Route exact path="/form" component={withAuth(Form)} />
            <Route path="/login" component={Login} />
        </Switch>
    </>
);

export default Router;
