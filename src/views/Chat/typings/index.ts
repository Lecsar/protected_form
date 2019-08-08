import {
    CHAT_CONNECT_REQUEST,
    CHAT_CONNECT_ERROR,
    CHAT_CONNECT_SUCCESS,
    CHAT_SET_MESSAGES,
    CHAT_SEND_MESSAGE_SUCCESS,
    CHAT_SEND_MESSAGE_REQUEST,
} from '../const';
import {Message} from './ws';

export interface ChatUser {
    id: number;
    name: string;
}

interface ChatConnectRequest {
    type: typeof CHAT_CONNECT_REQUEST;
}

interface ChatConnectSuccess {
    type: typeof CHAT_CONNECT_SUCCESS;
    user: ChatUser;
}

interface ChatConnectError {
    type: typeof CHAT_CONNECT_ERROR;
    error: string;
}

interface ChatSetMessages {
    type: typeof CHAT_SET_MESSAGES;
    messages: Message[];
}

interface ChatSendMessageRequest {
    type: typeof CHAT_SEND_MESSAGE_REQUEST;
    message: Message;
}

interface ChatSendMessageSuccess {
    type: typeof CHAT_SEND_MESSAGE_SUCCESS;
    message: Message;
}

type ChatAction =
    | ChatConnectRequest
    | ChatConnectSuccess
    | ChatConnectError
    | ChatSetMessages
    | ChatSendMessageRequest
    | ChatSendMessageSuccess;

export default ChatAction;
