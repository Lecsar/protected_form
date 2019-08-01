import {Action} from 'redux';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../../containers/Login/const';
import {LOG_OUT} from '../../containers/App/const';
import {Roles, ErrorMessage} from '..';

export interface LoginRequestAction extends Action {
    type: typeof LOGIN_REQUEST;
}

export interface LoginSuccessAction extends Action {
    type: typeof LOGIN_SUCCESS;
    payload: {
        login: string;
        role: Roles;
    };
}

export interface LoginErrorAction extends Action {
    type: typeof LOGIN_ERROR;
    payload: ErrorMessage;
}

export interface LogOutAction extends Action {
    type: typeof LOG_OUT;
}

export type LoginAction = LoginRequestAction | LoginSuccessAction | LoginErrorAction;

type LoginPageAction = LoginAction | LogOutAction;

export default LoginPageAction;
