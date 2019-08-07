import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../containers/Login/const';
import {LOG_OUT} from '../containers/App/const';
import {Roles, ErrorMessage} from '../typings';
import LoginAction from '../typings/Login';
import {LogOutAction} from '../typings/App';

interface LoginState {
    isAuthenticated: boolean;
    isLoading: boolean;
    error: ErrorMessage | boolean;
    login: string;
    role: Roles | null;
}

const initialState: LoginState = {
    isAuthenticated: false,
    isLoading: false,
    error: false,
    login: '',
    role: null,
};

type Action = LoginAction | LogOutAction;

export default (state = initialState, action: Action): LoginState => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, isLoading: true};
        case LOGIN_SUCCESS:
            return {...state, ...action.payload, isLoading: false, isAuthenticated: true};
        case LOGIN_ERROR:
            return {...state, isLoading: false, error: action.payload};
        case LOG_OUT:
            return {...initialState};
        default:
            return state;
    }
};
