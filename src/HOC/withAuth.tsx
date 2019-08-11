import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {Redirect} from 'react-router';
import {TypeOfConnect, UserData} from '../typings';
import {checkAuth} from '../helpers';
import {onSuccessLogin} from '../views/Login/actions/loginActions';
import {AppState} from '../store';
import {AUTH_TOKEN} from '../const';

const mapStateToProps = ({login: isAuthenticated}: AppState) => ({...isAuthenticated});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({onSuccessLogin}, dispatch);
const storeEnhancer = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type AuthenticatedComponentProps = {} & TypeOfConnect<typeof storeEnhancer>;

const URL_LOGIN_PAGE = '/login';

type OnSuccessLogin = (userData: UserData) => {type: string; payload: UserData};

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
                setTimeout(autoLogin(onSuccessLogin, toggleLoading), 200);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        if (isAuthenticated) {
            return <WrappedComponent />;
        }

        if (isLoading) {
            return <h1>Авторизация ...</h1>;
        }

        return <Redirect to={URL_LOGIN_PAGE} />;
    };

    return storeEnhancer(AuthenticatedComponent);
};

export default withAuth;
