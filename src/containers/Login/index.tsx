import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import Input from '../../components/Input';
import Buttton from '../../components/Button';

import {TypeOfConnect} from '../../typings';
import {onLogin} from './actions/loginActions';
import {AppState} from '../../store';
import Spinner from '../../components/Spinner';
import s from './styles/Login.module.less';

const INITIAL_LOGIN = '';
const INITIAL_PASSWORD = '';

const mapStateToProps = ({login}: AppState) => ({isLoading: login.isLoading, error: login.error});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({onLogin}, dispatch);

const storeEnhancer = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type LoginProps = {} & TypeOfConnect<typeof storeEnhancer>;

const Login = ({isLoading = false, error = false, onLogin}: LoginProps) => {
    const [login, setLogin] = useState(INITIAL_LOGIN);
    const [password, setPassword] = useState(INITIAL_PASSWORD);

    useEffect(() => {
        if (error && !isLoading) {
            setPassword(INITIAL_PASSWORD);
        }
    }, [isLoading, error]);

    const setValue = (setHandler: (value: string) => void) => (value: string) => setHandler(value);

    const onBtnClick = () => {
        if (!isLoading) {
            onLogin(login, password);
        }
    };

    const isBtnDisabled = isLoading || !(login && password);
    const isShowErrorLabel = error && !isLoading;

    return (
        <main className={s.form}>
            <Input type="text" label="Login" value={login} onChange={setValue(setLogin)} maxLength={10} />
            <Input type="password" label="Password" value={password} onChange={setValue(setPassword)} maxLength={16} />
            {isShowErrorLabel && <h3 className={s.error}>{error}</h3>}
            <Buttton onClick={onBtnClick} disabled={isBtnDisabled} ripple>
                Войти
                {isLoading && <Spinner className={s.center} />}
            </Buttton>
        </main>
    );
};

export default storeEnhancer(Login);
