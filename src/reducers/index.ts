import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {History} from 'history';

import login from './login';
import app from './app';
import {formReducer} from './formReducer';
import {chatReducer} from './chatReducer';
import {cabinetReducer} from './cabinetReducer';

export default (history: History) =>
    combineReducers({
        router: connectRouter(history),
        login,
        app,
        form: formReducer,
        chat: chatReducer,
        cabinet: cabinetReducer,
    });
