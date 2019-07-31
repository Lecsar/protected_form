import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {Redirect} from 'react-router';
import checkAuth, {Roles} from '../helpers/checkAuth';
import {onSuccessLogin} from '../containers/Login/actions/loginActions';
import {AppState} from '../store';
import {AUTH_TOKEN} from '../const';
import {UserData} from '../containers/Login/actions/interfaces';

const mapStateToProps = ({login: isAuthenticated}: AppState) => ({...isAuthenticated});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({onSuccessLogin}, dispatch);

const URL_LOGIN_PAGE = '/login';

type OnSuccessLogin = (userData: UserData) => {type: string; payload: UserData};

interface AuthenticatedComponentProps {
    isAuthenticated: boolean;
    onSuccessLogin: OnSuccessLogin;
}

const autoLogin = (onSuccessLogin: OnSuccessLogin, toggleLoading: () => void) => async () => {
    const authToken = localStorage.getItem(AUTH_TOKEN)!;
    const {error, token, ...userData} = await checkAuth({authToken});

    if (!error) {
        onSuccessLogin(userData as UserData);
    }

    toggleLoading();
};

const withAuth = (WrappedComponent: any) => {
    const AuthenticatedComponent = ({isAuthenticated, onSuccessLogin}: AuthenticatedComponentProps) => {
        const [isLoading, setLoading] = useState(!isAuthenticated);
        const toggleLoading = () => setLoading(!isLoading);

        useEffect(() => {
            if (!isAuthenticated) {
                setTimeout(autoLogin(onSuccessLogin, toggleLoading), 500);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        if (isAuthenticated) {
            return <WrappedComponent />;
        }

        if (isLoading) {
            return <h1>Загрузка ....</h1>;
        }

        return <Redirect to={URL_LOGIN_PAGE} />;
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(AuthenticatedComponent);
};

export default withAuth;
