import {Dispatch} from 'redux';
import {AddMessageApi, CHAT_ADD_MESSAGE} from '../typings';
import {CHAT_SEND_MESSAGE_SUCCESS} from '../const';

export default (socket: SocketIOClient.Socket) => (dispatch: Dispatch) => {
    socket.on(CHAT_ADD_MESSAGE, ({message}: AddMessageApi) => {
        console.log(message);

        dispatch({type: CHAT_SEND_MESSAGE_SUCCESS, message});
    });
};
