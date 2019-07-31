import {Dispatch} from 'redux';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../const';
import {ROUTING, AUTH_TOKEN} from '../../../const';
import checkAuth, {Roles, UserData} from '../../../helpers/checkAuth';

export const onLogin = (login: string, password: string) => (dispatch: Dispatch) => {
    dispatch({type: LOGIN_REQUEST});

    setTimeout(() => {
        const {error, ...userData} = checkAuth({login, password});

        if (error) {
            dispatch({type: LOGIN_ERROR, payload: error});
        } else {
            const {role, token} = userData as UserData;

            dispatch(onSuccessLogin({login, role}));
            dispatch({type: ROUTING, payload: {method: 'push', nextUrl: '/'}});

            localStorage.setItem(AUTH_TOKEN, token);
        }
    }, 1000);
};

export const onSuccessLogin = (payload: {login: string; role: Roles}) => ({
    type: LOGIN_SUCCESS,
    payload,
});

export const test = () => false;
