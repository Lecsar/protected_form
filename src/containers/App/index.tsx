import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {TypeOfConnect} from '../../typings';
import {onLogOut} from './actions/appActions';

import s from './styles/App.module.less';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({onLogOut}, dispatch);
const storeEnhancer = connect(
    null,
    mapDispatchToProps,
);

type AppProps = {} & TypeOfConnect<typeof storeEnhancer>;

const App = ({onLogOut}: AppProps) => {
    return (
        <div className={s.App}>
            <header className={s.header}>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className={s.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>

            <button onClick={onLogOut}>Разлогиниться</button>
        </div>
    );
};

export default storeEnhancer(App);
