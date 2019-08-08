import {flowRight} from 'lodash';
import connectFirstTime from './chatConnect';
import setChatListeners from './setChatListeners';
import * as ChatActions from './chatActions';

export const connectToChat = (socket: SocketIOClient.Socket) =>
    flowRight(
        setChatListeners(socket),
        connectFirstTime(socket),
    );

export const {sendMessage} = ChatActions;
