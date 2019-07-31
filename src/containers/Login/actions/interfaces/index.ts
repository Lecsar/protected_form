import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../../const';
import {LOG_OUT} from '../../../App/const';
import {ErrorMessage, Roles} from '../../../../typings';

export interface UserData {
    login: string | null;
    role: Roles | null;
}

export interface LoginRequestAction {
    type: typeof LOGIN_REQUEST;
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: {
        login: string;
        role: Roles;
    };
}

export interface LoginErrorAction {
    type: typeof LOGIN_ERROR;
    payload: ErrorMessage;
}

export interface LogOutAction {
    type: typeof LOG_OUT;
}
