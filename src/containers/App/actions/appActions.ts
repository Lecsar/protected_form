import {Dispatch} from 'redux';
import {LOG_OUT} from '../const';
import {AUTH_TOKEN} from '../../../const';

export const onLogOut = () => (dispatch: Dispatch) => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch({type: LOG_OUT});
};
