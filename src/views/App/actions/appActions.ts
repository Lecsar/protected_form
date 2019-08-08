import {Dispatch} from 'redux';
import {LOG_OUT, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR} from '../const';
import {AUTH_TOKEN} from '../../../const';
import {LoadPostsAction} from '../../../views/App/typings';

export const onLogOut = () => (dispatch: Dispatch) => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch({type: LOG_OUT});
};

export const onLoadPosts = (): LoadPostsAction => ({
    types: [LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR],
    callAPI: async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        const posts = await response.json();
        const slicedPosts = posts.slice(0, 20);

        return slicedPosts;
    },
});
