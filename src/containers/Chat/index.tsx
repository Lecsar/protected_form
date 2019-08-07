import React, {useEffect, useState, ChangeEvent, useRef} from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {compose} from 'recompose';
import {TypeOfConnect} from '../../typings';
import {AppState} from '../../store';
import {Grid} from '@material-ui/core';
import Message from '../../components/Message';
import Input from '../../components/Input';
import {enhanceFocus} from '../../enhances/focus';
import {connectToChat, sendMessage} from './actions/chatActions';
import useStyles from './styles';
import Spinner from '../../components/Spinner';
import {ENTER_KEY_CODE} from '../../const';
import BlockSpinner from '../../components/BlockSpinner';

const mapStateToProps = ({chat: {messages, isConnecting, id, name}}: AppState) => ({id, messages, name, isConnecting});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({connectToChat, sendMessage}, dispatch);

const enhanceStore = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const enhance = compose<ChatProps, HTMLInputElement>(enhanceStore);

type ChatProps = TypeOfConnect<typeof enhanceStore>;

const Chat = ({id, messages, name, isConnecting, connectToChat, sendMessage}: ChatProps) => {
    const [inputValue, setInputvalue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const s = useStyles();

    const resetInputValue = () => setInputvalue('');
    const onChangeInputValue = ({target: {value}}: ChangeEvent<HTMLInputElement>) => setInputvalue(value);

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isConnecting]);

    const onInputKeyDown = ({keyCode}: React.KeyboardEvent<HTMLInputElement>) => {
        switch (keyCode) {
            case ENTER_KEY_CODE:
                sendMessage({
                    userId: id!,
                    // author: name,
                    text: inputValue,
                } as any);
                resetInputValue();
                break;
        }
    };

    useEffect(() => {
        connectToChat();
    }, []);

    return (
        <Grid container component="main" className={s.root} direction="column" alignItems="center" justify="center">
            <Grid style={{minWidth: '600px'}} item xs={8}>
                <Grid item component="h1" className={s.header}>
                    Simple Chat
                </Grid>
                <Grid container className={s.chat} direction="column">
                    {messages.map(({id: messageId, userId, ...props}) => (
                        <Message key={messageId} {...props} isMyMessage={id === userId} />
                    ))}
                </Grid>
                <Input
                    inputRef={inputRef}
                    value={inputValue}
                    onChange={onChangeInputValue}
                    onKeyDown={onInputKeyDown}
                    placeholder="Write a message..."
                />
            </Grid>

            {isConnecting && <BlockSpinner />}
        </Grid>
    );
};

export default enhance(Chat);
