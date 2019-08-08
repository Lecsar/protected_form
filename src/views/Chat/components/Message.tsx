import React, {memo} from 'react';
import cn from 'classnames';
import {Grid, CircularProgress} from '@material-ui/core';
import {useStylesMessage} from '../styles/Message';

interface MessageProps {
    id?: string;
    author: string;
    text: string;
    isMyMessage?: boolean;
    isSending?: boolean;
    [x: string]: any;
}

const MessageBase = ({author = '', text = '', isMyMessage = false, isSending = false}: MessageProps) => {
    const s = useStylesMessage();

    return (
        <Grid container className={s.messageBlock} justify={isMyMessage ? 'flex-end' : 'flex-start'}>
            <Grid className={cn(s.message, {[s.myMessage]: isMyMessage, [s.otherMessage]: !isMyMessage})} item xs={8}>
                <Grid container direction="column" className={s.messageWrapper}>
                    <Grid container className={s.headerWrapper} alignItems="center" justify="space-between">
                        <Grid item component="h3" className={s.messageAuthor}>
                            {author}
                        </Grid>
                        {isMyMessage && !isSending && (
                            <Grid item className={s.deleteIcon}>
                                &#10008;
                            </Grid>
                        )}
                        {isSending && <CircularProgress className={s.loadingSpinner} size={15} />}
                    </Grid>

                    <Grid item component="p" className={s.messageText}>
                        {text}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

const checkProps = <T extends {[x: string]: any}>(prevProps: T, nextProps: T) =>
    Object.keys(prevProps).every(key => prevProps[key] === nextProps[key]);

export const Message = memo(MessageBase, checkProps);
