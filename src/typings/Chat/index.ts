import {
    CHAT_CONNECT_REQUEST,
    CHAT_CONNECT_ERROR,
    CHAT_CONNECT_SUCCESS,
    CHAT_SET_MESSAGES,
} from '../../containers/Chat/const';
import {Message} from './ws';

interface ChatConnectRequest {
    type: typeof CHAT_CONNECT_REQUEST;
}

interface ChatConnectSuccess {
    type: typeof CHAT_CONNECT_SUCCESS;
    name: string;
    id: number;
}

interface ChatConnectError {
    type: typeof CHAT_CONNECT_ERROR;
    error: string;
}

interface ChatSetMessages {
    type: typeof CHAT_SET_MESSAGES;
    messages: Message[];
}

type ChatAction = ChatConnectRequest | ChatConnectSuccess | ChatConnectError | ChatSetMessages;

export default ChatAction;
