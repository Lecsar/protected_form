import React, {useEffect, useState, ChangeEvent, useRef} from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {compose} from 'recompose';
import io from 'socket.io-client';
import {TypeOfConnect} from '../../typings';
import {AppState} from '../../store';
import {Grid} from '@material-ui/core';
import Message from '../../components/Message';
import Input from '../../components/Input';
import {connectToChat, sendMessage} from './actions';
import {ENTER_KEY_CODE, WS_ADRESS} from '../../const';
import BlockSpinner from '../../components/BlockSpinner';
import Button from '../../components/Button';
import useStyles from './styles';

const mapStateToProps = ({chat: {messageHistory, isConnecting, user}}: AppState) => ({
    user,
    messageHistory,
    isConnecting,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({connectToChat, sendMessage}, dispatch);

const enhanceStore = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const enhance = compose<ChatProps, HTMLInputElement>(enhanceStore);

type ChatProps = TypeOfConnect<typeof enhanceStore>;

const Chat = ({user, messageHistory, isConnecting, connectToChat, sendMessage}: ChatProps) => {
    const [inputValue, setInputvalue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const s = useStyles();

    const resetInputValue = () => setInputvalue('');
    const onChangeInputValue = ({target: {value}}: ChangeEvent<HTMLInputElement>) => setInputvalue(value);

    useEffect(() => {
        if (!isConnecting && inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isConnecting]);

    const onInputKeyDown = ({keyCode}: React.KeyboardEvent<HTMLInputElement>) => {
        switch (keyCode) {
            case ENTER_KEY_CODE:
                if (user) {
                    sendMessage({userId: user.id, text: inputValue, author: user.name});
                    resetInputValue();
                }
                break;
        }
    };

    const clearHistory = () => {
        const socket = io.connect(WS_ADRESS);

        socket.emit('clearChat');
    };

    useEffect(() => {
        const socket = io.connect(WS_ADRESS);
        connectToChat(socket);

        return () => {
            socket.close();
        };
    }, []);

    return (
        <Grid container component="main" className={s.root} direction="column" alignItems="center" justify="center">
            <Grid item xs={8}>
                <Grid item component="h1" className={s.header}>
                    Simple Chat
                </Grid>
                <Grid container className={s.chat} direction="column" wrap="nowrap">
                    {messageHistory.map(({id, userId, ...props}, index) => (
                        <Message key={id || index} {...props} isMyMessage={user!.id === userId} />
                    ))}
                </Grid>
                <Input
                    inputRef={inputRef}
                    value={inputValue}
                    onChange={onChangeInputValue}
                    onKeyDown={onInputKeyDown}
                    placeholder="Write a message..."
                />

                <Button onClick={clearHistory}>Очистить историю</Button>
            </Grid>

            {isConnecting && <BlockSpinner />}
        </Grid>
    );
};

export default enhance(Chat);
