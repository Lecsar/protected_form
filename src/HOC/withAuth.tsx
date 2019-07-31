import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import checkAuth from '../helpers/checkAuth';
import {onSuccessLogin} from '../containers/Login/actions/loginActions';
import {AppState} from '../store/configureStore';
import {AUTH_TOKEN} from '../const';

const mapStateToProps = ({login}: AppState) => ({...login});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({onSuccessLogin}, dispatch);

const URL_LOGIN_PAGE = '/login';

const withAuth = (WrappedComponent: any) => {
    const AuthenticatedComponent = ({isAuthenticated, onSuccessLogin, history}: any) => {
        if (isAuthenticated) {
            return <WrappedComponent />;
        }

        const token = localStorage.getItem(AUTH_TOKEN)!;

        if (token) {
            const {error, ...userData} = checkAuth({token});

            if (error) {
                history.push(URL_LOGIN_PAGE);
            } else {
                onSuccessLogin(userData);
            }
        } else {
            history.push(URL_LOGIN_PAGE);
        }

        return <WrappedComponent />;
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(AuthenticatedComponent);
};

export default withAuth;
