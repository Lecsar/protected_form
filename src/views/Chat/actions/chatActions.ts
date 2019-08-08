import {Dispatch} from 'redux';
import io from 'socket.io-client';
import uuid from 'uuid';
import {WS_ADRESS} from '../../../const';
import {CHAT_SEND_MESSAGE_REQUEST} from '../const';
import {CHAT_ADD_MESSAGE, Message} from '../typings';

export const sendMessage = ({userId, author}: Omit<Message, 'id' | 'text'>, text: string) => (dispatch: Dispatch) => {
    const socket = io.connect(WS_ADRESS);
    socket.emit(CHAT_ADD_MESSAGE, {text, userId});

    const message: Message = {
        id: uuid(),
        text,
        userId,
        author,
        isSending: true,
    };

    dispatch({type: CHAT_SEND_MESSAGE_REQUEST, message});
};
