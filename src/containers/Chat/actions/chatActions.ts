import {Dispatch} from 'redux';
import {CHAT_CONNECT_REQUEST, CHAT_CONNECT_SUCCESS, CHAT_SET_MESSAGES} from '../const';
import io from 'socket.io-client';
import {
    CHAT_CONNECTED,
    CHAT_ADD_USER,
    AddUserApi,
    CHAT_GET_ALL_MESSAGES,
    GetAllMessagesApi,
    Message,
    CHAT_ADD_MESSAGE,
} from '../../../typings/Chat/ws';

export const connectToChat = () => (dispatch: Dispatch) => {
    const socket = io.connect('https://10.19.12.117:8000');

    dispatch({type: CHAT_CONNECT_REQUEST});

    new Promise(res => {
        socket.on(CHAT_CONNECTED, () => {
            console.log('Успешное соединение');
            res();
        });
    })
        .then(() => {
            socket.emit(CHAT_ADD_USER, 'Dmitry Levshin');
            return;
        })
        .then(
            () =>
                new Promise(res => {
                    socket.on(CHAT_ADD_USER, ({user}: AddUserApi) => {
                        console.log('Пользователь авторизовался в чате');

                        dispatch({type: CHAT_CONNECT_SUCCESS, ...user});
                        res();
                    });
                }),
        )
        .then(() => {
            socket.emit(CHAT_GET_ALL_MESSAGES);
            return;
        })
        .then(
            () =>
                new Promise(res => {
                    socket.on(CHAT_GET_ALL_MESSAGES, ({messages}: GetAllMessagesApi) => {
                        console.log('Cообщения успешно получены');
                        dispatch({type: CHAT_SET_MESSAGES, messages});
                        res();
                    });
                }),
        )
        .then(() => {
            socket.close();
        })
        .catch(console.error);
};

export const sendMessage = (message: Omit<Omit<Message, 'id'>, 'userId'>) => (dispatch: Dispatch) => {
    const socket = io.connect('https://10.19.12.117:8000');

    socket.emit(CHAT_ADD_MESSAGE, message);

    socket.on(CHAT_ADD_MESSAGE, (data: any) => {
        console.log(data);
    });
};
