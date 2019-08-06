import React, {useEffect, useCallback, ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {compose, withStateHandlers, StateHandlerMap, withHandlers} from 'recompose';
import Grid from '@material-ui/core/Grid';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {TypeOfConnect} from '../../typings';
import {onLogin} from './actions/loginActions';
import {AppState} from '../../store';
// import Spinner from '../../components/Spinner';
import {ENTER_KEY_CODE} from '../../const';
import useStyles from './styles';

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

const enhanceStateHandlers = withStateHandlers<LoginState, LoginStateHandlerProps>(
    {login: '', password: ''},
    {
        setValueInInput: () => (propName: PropName, value: string) => ({
            [propName]: value,
        }),
    },
);

const enhanceHandlers = withHandlers<LoginProps, Handlers>({
    onClickLoginBtn: ({isLoading, login, password, onLogin}) => () => {
        if (!isLoading) {
            onLogin(login, password);
        }
    },
});

const enhance = compose<LoginProps, Outter>(
    enhanceStore,
    enhanceStateHandlers,
    enhanceHandlers,
);

const Login = ({login, password, setValueInInput, isLoading, error, onClickLoginBtn}: LoginProps) => {
    const styles = useStyles();

    const setValue = useCallback(
        (propName: PropName) => ({target: {value}}: ChangeEvent<HTMLInputElement>) => setValueInInput(propName, value),
        [setValueInInput],
    );

    const enter = ({keyCode}: React.KeyboardEvent<HTMLInputElement>) => {
        if (keyCode === ENTER_KEY_CODE) {
            onClickLoginBtn();
        }
    };

    useEffect(() => {
        if (error && !isLoading) {
            setValueInInput('password', '');
        }
    }, [isLoading, error, setValue]);

    const isBtnDisabled = isLoading || !(login && password);
    // const isShowErrorLabel = error && !isLoading;

    return (
        <Grid container direction='column' alignItems='center' className={styles.root} xs={12}>
            <Grid direction='column' container justify='center' alignItems='center' spacing={2} xs={10}>
                <Grid item>
                    <Input label='Login' type='text' value={login} onChange={setValue('login')} />
                </Grid>
                <Grid item>
                    <Input
                        label='Password'
                        type='password'
                        value={password}
                        onChange={setValue('password')}
                        onKeyDown={enter}
                    />
                </Grid>

                <Grid item>
                    <Button onClick={onClickLoginBtn} disabled={isBtnDisabled} variant='contained' color='primary'>
                        Войти
                    </Button>
                </Grid>
            </Grid>

            {/* {isShowErrorLabel && <h3 className={s.error}>{error}</h3>} 
             <Buttton onClick={onBtnClick} disabled={isBtnDisabled} ripple>
                Войти
                {isLoading && <Spinner className={s.center} />}
            </Buttton>  */}
        </Grid>
    );
};

export default enhance(Login);
