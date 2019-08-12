import {Dispatch} from 'redux';
import {LOAD_FILE_REQUEST} from '../const';

export const loadInitialData = () => (dispatch: Dispatch) => {};

export const loadFile = (fieldId: string, files: Blob[]) => (dispatch: Dispatch) => {
    dispatch({type: LOAD_FILE_REQUEST});
};
