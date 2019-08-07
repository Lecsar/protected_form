import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {TypeOfConnect} from '../../typings';
import {AppState} from '../../store';
import {Grid, makeStyles} from '@material-ui/core';
import Message from '../../components/Message';
import Input from '../../components/Input';
import {compose} from 'recompose';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height: 1000,
    },

    header: {
        fontSize: '3rem',
        textAlign: 'center',
        margin: '1rem 0',
    },

    chat: {
        width: '100%',
        backgroundColor: '#f5f5f5',
        height: '70rem',
    },
});

const mapStateToProps = ({chat: {messages}}: AppState) => ({messages});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch);

const enhanceStore = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const enhanceFocus = <T extends {}, K extends HTMLElement>(Wrapper: (wrapperProps: T) => JSX.Element) => {
    type Props = T & {inputRef: React.RefObject<K>};

    return (props: Props) => {
        const inputRef = useRef<K>(null);

        useEffect(() => {
            if (inputRef && inputRef.current) {
                inputRef.current.focus();
            }
        }, []);

        return <Wrapper inputRef={inputRef} {...props} />;
    };
};

type ChatProps = TypeOfConnect<typeof enhanceStore> & {inputRef: React.RefObject<HTMLInputElement>};

const Chat = ({inputRef, messages}: ChatProps) => {
    const s = useStyles();

    return (
        <Grid container component="main" className={s.root} direction="column" alignItems="center">
            <Grid item xs={8}>
                <Grid item component="h1" className={s.header}>
                    Simple Chat
                </Grid>

                <Grid container className={s.chat} direction="column">
                    {messages.map(({id, ...props}) => (
                        <Message key={id} {...props} />
                    ))}
                </Grid>

                <Input inputRef={inputRef} placeholder="Write a message..." />
            </Grid>
        </Grid>
    );
};

const enhance = compose<ChatProps, HTMLInputElement>(
    enhanceStore,
    enhanceFocus,
);

export default enhance(Chat);
