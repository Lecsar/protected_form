import React from 'react';
import {Grid} from '@material-ui/core';
import {Message} from './Message';
import {Message as MessageType} from '../typings';

import {useStylesMessageBlock} from '../styles';

interface MessageBlockProps {
    currentUserId: number;
    messageHistory: MessageType[];
}

export const MessageBlock = ({currentUserId, messageHistory}: MessageBlockProps) => {
    const s = useStylesMessageBlock();

    return (
        <Grid container className={s.chat} direction="column" wrap="nowrap">
            {messageHistory.map(({id, userId, ...props}) => (
                <Message key={id} {...props} isMyMessage={currentUserId === userId} />
            ))}
        </Grid>
    );
};
