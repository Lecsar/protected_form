interface Message {
    id: string;
    author: string;
    text: string;
    isMyMessage: boolean;
}

interface ChatState {
    messages: Message[];
}

const initialState: ChatState = {
    messages: [
        {
            id: '1',
            author: 'Dmitry Levshin',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            isMyMessage: true,
        },
        {
            id: '2',
            author: 'Dmitry Levshin',
            text:
                'Duis iaculis a dui vel bibendum. Interdum et malesuada fames ac ante ipsum primis que, risus elit egestas m',
            isMyMessage: true,
        },
        {
            id: '3',
            author: 'Alexey Efremov',
            text: 'Proin id sem a elit pellentesque porta. Phasellus ut ipsum tincidunt',
            isMyMessage: false,
        },
    ],
};

export default (state = initialState, action: any): ChatState => {
    switch (action.type) {
        default:
            return state;
    }
};
