import {Action} from 'redux';
import {LOG_OUT, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR} from '../const';
import {Post} from '../../../typings';

export interface LogOutAction extends Action {
    type: typeof LOG_OUT;
}

export interface LoadPostsAction {
    types: string[];
    callAPI: () => void;
}

export interface LoadPostsRequest extends Action {
    type: typeof LOAD_POSTS_REQUEST;
}

export interface LoadPostsSuccess extends Action {
    type: typeof LOAD_POSTS_SUCCESS;
    response: Post[];
}

export interface LoadPostsError extends Action {
    type: typeof LOAD_POSTS_ERROR;
    error: string;
}

type AppAction = LoadPostsRequest | LoadPostsSuccess | LoadPostsError;

export default AppAction;
