import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {onLogOut} from './actions/appActions';

import s from './styles/App.module.less';

const App = ({onLogOut}: any) => {
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

// const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({onLogOut}, dispatch);

export default connect(
    null,
    mapDispatchToProps,
)(App);
