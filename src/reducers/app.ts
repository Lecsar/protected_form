import {Post} from '../typings';
import AppAction from '../typings/App';
import {LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR} from '../containers/App/const';

interface AppState {
    posts: Post[];
    isLoading: boolean;
    error: string | boolean;
}

const initialState: AppState = {
    posts: [],
    isLoading: false,
    error: false,
};

export default (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case LOAD_POSTS_REQUEST:
            return {...state, isLoading: true};
        case LOAD_POSTS_SUCCESS:
            return {...state, isLoading: false, posts: [...state.posts, ...action.response]};
        case LOAD_POSTS_ERROR:
            return {...state, isLoading: false, error: action.error};
        default:
            return state;
    }
};
