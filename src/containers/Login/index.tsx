import React, {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {compose, withStateHandlers, StateHandlerMap, withHandlers} from 'recompose';
import Input from '../../components/Input';
import Buttton from '../../components/Button';

import {TypeOfConnect} from '../../typings';
import {onLogin} from './actions/loginActions';
import {AppState} from '../../store';
import Spinner from '../../components/Spinner';
import s from './styles/Login.module.less';

type Outter = {};

interface LoginState {
    login: string;
    password: string;
}

type LoginStateHandlerProps = StateHandlerMap<LoginState> & {
    setState: (propName: PropName, value: string) => Partial<LoginState>;
};
interface Handlers {
    onBtnClick: () => void;
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
        setState: () => (propName: PropName, value: string) => ({
            [propName]: value,
        }),
    },
);

const enhanceHandlers = withHandlers<LoginProps, Handlers>({
    onBtnClick: ({isLoading, login, password, onLogin}) => () => {
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

const Login = (props: LoginProps) => {
    const {login, password, setState, isLoading, error, onBtnClick} = props;
    const setValue = useCallback((propName: PropName) => (value: string) => setState(propName, value), [setState]);

    useEffect(() => {
        if (error && !isLoading) {
            setValue('password')('');
        }
    }, [isLoading, error, setValue]);

    const isBtnDisabled = isLoading || !(login && password);
    const isShowErrorLabel = error && !isLoading;

    return (
        <main className={s.form}>
            <Input type="text" label="Login" value={login} onChange={setValue('login')} maxLength={10} />
            <Input type="password" label="Password" value={password} onChange={setValue('password')} maxLength={16} />
            {isShowErrorLabel && <h3 className={s.error}>{error}</h3>}
            <Buttton onClick={onBtnClick} disabled={isBtnDisabled} ripple>
                Войти
                {isLoading && <Spinner className={s.center} />}
            </Buttton>
        </main>
    );
};

export default enhance(Login);
