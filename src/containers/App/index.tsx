import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {compose, lifecycle} from 'recompose';

import {AppState} from '../../store';
import {TypeOfConnect} from '../../typings';
import {onLogOut, onLoadPosts} from './actions/appActions';

import Button from '../../components/Button';
import List from '../../components/List';
import s from './styles/App.module.less';
import withLazyLoading from '../../HOC/withLazyLoading';

const mapStateToProps = ({app}: AppState) => ({...app});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({onLogOut, onLoadPosts}, dispatch);

const dataEnchancer = lifecycle<AppProps, Outter>({
    componentDidMount() {
        this.props.onLoadPosts();
    },
});

const storeEnhancer = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type Outter = {};
type AppProps = {} & TypeOfConnect<typeof storeEnhancer>;

const enhancer = compose<AppProps, Outter>(
    storeEnhancer,
    dataEnchancer,
);

const App = ({error, posts, onLogOut, onLoadPosts}: AppProps) => {
    type T = {title: string; posts: typeof posts};

    const ListWithLazyLoading = withLazyLoading<T>({
        onLazyLoading: onLoadPosts,
        connectedProps: {
            title: 'Список статей:',
            posts,
            watchedPropName: 'posts',
        },
    })(List);

    return (
        <div className={s.App}>
            {ListWithLazyLoading}

            <hr />

            <Button onClick={onLogOut}>Разлогиниться</Button>
        </div>
    );
};

export default enhancer(App);
