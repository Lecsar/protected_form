export interface Message {
    id: number | string;
    userId: number;
    author: string;
    text: string;
    isSending?: boolean;
}

export interface AddUserApi {
    user: {name: string; id: number};
}

export interface GetAllMessagesApi {
    messages: Message[];
}

export interface AddMessageApi {
    message: Message;
}

export const CHAT_CONNECTED = 'connected';
export const CHAT_ADD_USER = 'addUser';
// export const CHAT_USER_ADDED = 'userAdded';
export const CHAT_ADD_MESSAGE = 'addMessage';
// export const CHAT_MESSAGE_ADDED = 'messageAdded';
export const CHAT_GET_ALL_MESSAGES = 'getAllMessages';
