import React from 'react';
import {Route, Switch} from 'react-router';

import withAuth from '../HOC/withAuth';

import App from '../views/App';
import Login from '../views/Login';
import {Form} from '../views/Form';
import {ChatApp} from '../views/Chat';

const Router = () => (
    <>
        <Switch>
            <Route exact path="/" component={ChatApp} />
            <Route exact path="/app" component={withAuth(App)} />
            <Route exact path="/form" component={withAuth(Form)} />
            <Route path="/login" component={Login} />
        </Switch>
    </>
);

export default Router;
