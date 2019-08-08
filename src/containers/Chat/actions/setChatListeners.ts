import {Dispatch} from 'redux';
import {AddMessageApi, CHAT_ADD_MESSAGE} from '../../../typings/Chat/ws';
import {CHAT_SEND_MESSAGE_SUCCESS} from '../const';

export default (socket: SocketIOClient.Socket) => (dispatch: Dispatch) => {
    socket.on(CHAT_ADD_MESSAGE, ({message}: AddMessageApi) => {
        dispatch({type: CHAT_SEND_MESSAGE_SUCCESS, message});
    });
};
