import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {compose} from 'recompose';
import io from 'socket.io-client';
import {Grid} from '@material-ui/core';

import {BlockSpinner, Button} from '../../../components';
import {MessageBlock} from '../components/MessageBlock';
import {MessageInput} from './MessageInput';
import {TypeOfConnect} from '../../../typings';
import {CLEAR_CHAT} from '../typings';
import {AppState} from '../../../store';
import {connectToChat, sendMessage} from '../actions';
import {WS_ADRESS} from '../../../const';
import {useStylesChatApp} from '../styles';

/* eslint-disable  react-hooks/exhaustive-deps */

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

const BaseChatApp = ({user, messageHistory, isConnecting, connectToChat, sendMessage}: ChatProps) => {
    const s = useStylesChatApp();

    const clearHistory = () => {
        const socket = io.connect(WS_ADRESS);
        socket.emit(CLEAR_CHAT);
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
            <Grid item container direction="column" xs={8}>
                <Grid item component="h1" className={s.header}>
                    Simple Chat
                </Grid>
                {user && (
                    <>
                        <MessageBlock currentUserId={user.id} messageHistory={messageHistory} />
                        <MessageInput
                            isConnecting={isConnecting}
                            sendMessage={(text: string) => sendMessage({author: user.name, userId: user.id}, text)}
                        />
                    </>
                )}
                <Button onClick={clearHistory}>Очистить историю</Button>
            </Grid>

            {isConnecting && <BlockSpinner />}
        </Grid>
    );
};

export const ChatApp = enhance(BaseChatApp);
