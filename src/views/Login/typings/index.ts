import {Action} from 'redux';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../const';
import {Roles, ErrorMessage} from '../../../typings';

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

export type LoginAction = LoginRequestAction | LoginSuccessAction | LoginErrorAction;

export default LoginAction;
