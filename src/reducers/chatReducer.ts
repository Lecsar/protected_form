import {ChatAction, ChatUser, Message} from '../views/Chat/typings';
import {
    CHAT_CONNECT_SUCCESS,
    CHAT_CONNECT_REQUEST,
    CHAT_CONNECT_ERROR,
    CHAT_SET_MESSAGES,
    CHAT_SEND_MESSAGE_REQUEST,
    // CHAT_SEND_MESSAGE_SUCCESS,
} from '../views/Chat/const';

interface ChatState {
    user: ChatUser | null;
    messageHistory: Message[];
    isConnecting: boolean;
    error: false | string;
}

const initialState: ChatState = {
    user: null,
    messageHistory: [],
    isConnecting: true,
    error: false,
};

export const chatReducer = (state = initialState, action: ChatAction): ChatState => {
    switch (action.type) {
        case CHAT_CONNECT_REQUEST:
            return {...state, isConnecting: true};
        case CHAT_CONNECT_SUCCESS:
            return {...state, isConnecting: false, user: action.user};
        case CHAT_CONNECT_ERROR:
            return {...state, isConnecting: false, error: action.error};
        case CHAT_SET_MESSAGES:
            return {...state, messageHistory: action.messages};
        case CHAT_SEND_MESSAGE_REQUEST:
            return {...state, messageHistory: [...state.messageHistory, action.message]};
        // case CHAT_SEND_MESSAGE_SUCCESS:
        //     return {...state, messages: [...state.messages, action.message]};
        default:
            return state;
    }
};
