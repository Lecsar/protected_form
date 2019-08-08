import React from 'react';
import cn from 'classnames';
import {Grid} from '@material-ui/core';
import {useStylesMessage} from '../styles/Message';

interface MessageProps {
    id?: string;
    author: string;
    text: string;
    isMyMessage?: boolean;
}

const Message = ({author = '', text = '', isMyMessage = false}: MessageProps) => {
    const s = useStylesMessage();

    return (
        <Grid container className={s.messageBlock} justify={isMyMessage ? 'flex-end' : 'flex-start'}>
            <Grid className={cn(s.message, {[s.myMessage]: isMyMessage, [s.otherMessage]: !isMyMessage})} item xs={8}>
                <Grid container direction="column" className={s.messageWrapper}>
                    <Grid item component="h3" className={s.messageAuthor}>
                        {author}
                    </Grid>
                    <Grid item component="p" className={s.messageText}>
                        {text}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Message;
