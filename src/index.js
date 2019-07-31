import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';

import configureStore, {history} from './store/configureStore';
import Router from './router';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
