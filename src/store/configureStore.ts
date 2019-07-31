import {createBrowserHistory} from 'history';
import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';
import redirect from '../middlewares/redirect';

export const history = createBrowserHistory();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = createRootReducer(history);

export default function configureStore(preloadedState = {}) {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), thunk, redirect)),
    );

    return store;
}

export type AppState = ReturnType<typeof rootReducer>;
