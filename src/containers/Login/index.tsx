import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {onLogin} from './actions/loginActions';

import Spinner from '../../components/Spinner';

import s from './styles/Login.module.less';
import {AppState} from '../../store/configureStore';

const INITIAL_LOGIN = '';
const INITIAL_PASSWORD = '';

const Login = ({isLoading = false, error = false, onLogin}: any) => {
    const [login, setLogin] = useState(INITIAL_LOGIN);
    const [password, setPassword] = useState(INITIAL_PASSWORD);

    useEffect(() => {
        if (error && !isLoading) {
            setPassword(INITIAL_PASSWORD);
        }
    }, [isLoading, error]);

    const setValue = (setHandler: (value: string) => void) => ({target}: any) => setHandler(target.value);
    const onBtnClick = () => {
        if (!isLoading) {
            onLogin(login, password);
        }
    };

    const isBtnDisabled = isLoading || !(login && password);
    const isShowErrorLabel = error && !isLoading;

    return (
        <main className={s.form}>
            <input className={s.input} value={login} onChange={setValue(setLogin)} type="text" />
            <input className={s.input} value={password} onChange={setValue(setPassword)} type="password" />
            {isShowErrorLabel && <h3 className={s.error}>{error}</h3>}
            <button onClick={onBtnClick} className={s.btn} disabled={isBtnDisabled}>
                Войти
                {isLoading && <Spinner className={s.center} />}
            </button>
        </main>
    );
};

const mapStateToProps = ({login}: AppState) => ({isLoading: login.isLoading, error: login.error});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({onLogin}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
