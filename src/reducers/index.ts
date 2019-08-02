import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {History} from 'history';

import login from './login';
import app from './app';

export default (history: History) => combineReducers({router: connectRouter(history), login, app});
