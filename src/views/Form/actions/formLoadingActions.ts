import {Dispatch} from 'redux';
import uuid from 'uuid';
import {LOAD_FILE_REQUEST} from '../const';

export const loadInitialData = () => (dispatch: Dispatch) => {};

export const loadFiles = (fieldId: string, files: File[]) => (dispatch: Dispatch) => {
    const filesData = files.map(({name}) => ({id: uuid(), name}));

    dispatch({type: LOAD_FILE_REQUEST, fieldId, filesData});
};
