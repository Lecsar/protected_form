import React from 'react';
import {Route, Switch} from 'react-router';

import withAuth from '../HOC/withAuth';

import App from '../views/App';
import {Login} from '../views/Login';
import {Form} from '../views/Form';
import {ChatApp} from '../views/Chat';
import {Cabinet} from 'views/Cabinet';

const Router = () => (
    <>
        <Switch>
            <Route exact path="/" component={Cabinet} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/chat" component={withAuth(ChatApp)} />
            <Route exact path="/app" component={withAuth(App)} />
            <Route path="/login" component={Login} />
        </Switch>
    </>
);

export default Router;
