import React, {useState, ChangeEvent, useRef, useEffect} from 'react';
import {Dispatch} from 'redux';
import {Input} from '../../../components';
import {ENTER_KEY_CODE} from '../../../const';

interface MessageInputProps {
    isConnecting: boolean;
    sendMessage: (text: string) => (dispatch: Dispatch) => void;
}

export const MessageInput = ({isConnecting, sendMessage}: MessageInputProps) => {
    const [text, setText] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!isConnecting && inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isConnecting]);

    const resetInputValue = () => setText('');
    const onChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => setText(value);

    const onInputKeyDown = ({keyCode}: React.KeyboardEvent<HTMLInputElement>) => {
        switch (keyCode) {
            case ENTER_KEY_CODE:
                sendMessage(text);
                resetInputValue();
                break;
        }
    };

    return (
        <Input
            inputRef={inputRef}
            value={text}
            onChange={onChange}
            onKeyDown={onInputKeyDown}
            placeholder="Write a message..."
        />
    );
};
