import ChatAction from '../typings/Chat';
import {
    CHAT_CONNECT_SUCCESS,
    CHAT_CONNECT_REQUEST,
    CHAT_CONNECT_ERROR,
    CHAT_SET_MESSAGES,
} from '../containers/Chat/const';
import {Message} from '../typings/Chat/ws';

interface ChatState {
    id: number | null;
    name: string;
    messages: Message[];
    isConnecting: boolean;
    error: false | string;
}

const initialState: ChatState = {
    id: null,
    name: '',
    messages: [],
    isConnecting: true,
    error: false,
};

export default (state = initialState, action: ChatAction): ChatState => {
    switch (action.type) {
        case CHAT_CONNECT_REQUEST:
            return {...state, isConnecting: true};
        case CHAT_CONNECT_SUCCESS:
            return {...state, isConnecting: false, id: action.id, name: action.name};
        case CHAT_CONNECT_ERROR:
            return {...state, isConnecting: false, error: action.error};
        case CHAT_SET_MESSAGES:
            return {...state, messages: action.messages};
        default:
            return state;
    }
};
