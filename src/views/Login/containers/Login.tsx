/* eslint-disable  react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {compose, StateHandlerMap, withHandlers} from 'recompose';
import Grid from '@material-ui/core/Grid';
import {TypeOfConnect} from 'typings';
import {AppState} from 'store';
// import {ENTER_KEY_CODE} from 'const';
import {onLogin} from '../actions/loginActions';
import {useLoginStyles} from '../styles';
import {LoginInput} from '../components/LoginInput';
import {PasswordInput} from '../components/PasswordInput';

type Outter = {};

interface LoginState {
    login: string;
    password: string;
}

type LoginStateHandlerProps = StateHandlerMap<LoginState> & {
    setValueInInput: (propName: PropName, value: string) => Partial<LoginState>;
};

interface Handlers {
    onClickLoginBtn: () => void;
}

type PropName = keyof LoginState;

const mapStateToProps = ({login}: AppState) => ({isLoading: login.isLoading, error: login.error});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({onLogin}, dispatch);

const enhanceStore = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type LoginProps = Outter & LoginState & LoginStateHandlerProps & Handlers & TypeOfConnect<typeof enhanceStore>;

// const enhanceStateHandlers = withStateHandlers<LoginState, LoginStateHandlerProps>(
//     {login: '', password: ''},
//     {
//         setValueInInput: () => (propName: PropName, value: string) => ({
//             [propName]: value,
//         }),
//     },
// );

const enhanceHandlers = withHandlers<LoginProps, Handlers>({
    onClickLoginBtn: ({isLoading, login, password, onLogin}) => () => {
        if (!isLoading) {
            onLogin(login, password);
        }
    },
});

const enhance = compose<LoginProps, Outter>(
    enhanceStore,
    enhanceHandlers,
);

// STATE
const LoginBase = ({isLoading, error, onClickLoginBtn}: LoginProps) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const styles = useLoginStyles();

    // const enter = ({keyCode}: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (keyCode === ENTER_KEY_CODE) {
    //         onClickLoginBtn();
    //     }
    // };

    useEffect(() => {
        if (error && !isLoading) {
            setPassword('');
        }
    }, [isLoading, error]);

    // const isBtnDisabled = isLoading || !(login && password);
    // const isShowErrorLabel = error && !isLoading;

    return (
        <Grid container direction="column" alignItems="center" className={styles.root}>
            <Grid direction="column" container item xs={8} spacing={2} justify="center" alignItems="center">
                <LoginInput value={login} setValue={setLogin} />
                <PasswordInput value={password} setValue={setPassword} />
            </Grid>

            {/* {isShowErrorLabel && <h3 className={s.error}>{error}</h3>} 
             <Buttton onClick={onBtnClick} disabled={isBtnDisabled} ripple>
                Войти
                {isLoading && <Spinner className={s.center} />}
            </Buttton>  */}
        </Grid>
    );
};

export const Login = enhance(LoginBase);
