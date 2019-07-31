import {Dispatch} from 'redux';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../const';
import {ROUTING, AUTH_TOKEN} from '../../../const';
import checkAuth from '../../../helpers/checkAuth';
import {UserData} from './interfaces';

export const onLogin = (login: string, password: string) => async (dispatch: Dispatch) => {
    dispatch({type: LOGIN_REQUEST});

    const {error, ...userData} = await checkAuth({login, password});

    if (error) {
        dispatch({type: LOGIN_ERROR, payload: error});
    } else {
        const {role, token} = userData;

        dispatch(onSuccessLogin({login, role}));
        dispatch({type: ROUTING, payload: {method: 'push', nextUrl: '/'}});

        localStorage.setItem(AUTH_TOKEN, token!);
    }
};

export const onSuccessLogin = (payload: UserData) => ({
    type: LOGIN_SUCCESS,
    payload,
});

export const test = () => false;
