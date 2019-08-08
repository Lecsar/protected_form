import {Dispatch} from 'redux';
import {CHAT_CONNECT_REQUEST, CHAT_CONNECT_SUCCESS, CHAT_SET_MESSAGES} from '../const';
import {
    CHAT_CONNECTED,
    CHAT_ADD_USER,
    AddUserApi,
    CHAT_GET_ALL_MESSAGES,
    GetAllMessagesApi,
} from '../../../typings/Chat/ws';

export default (socket: SocketIOClient.Socket) => (dispatch: Dispatch) => {
    dispatch({type: CHAT_CONNECT_REQUEST});

    new Promise(res => {
        socket.once(CHAT_CONNECTED, () => {
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

                        dispatch({type: CHAT_CONNECT_SUCCESS, user});
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
        .catch(console.error);

    return dispatch;
};
