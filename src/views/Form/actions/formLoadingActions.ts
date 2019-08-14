import {Dispatch} from 'redux';
import uuid from 'uuid';
import {LOAD_FILE_REQUEST, LOAD_FILE_SUCCESS, LOAD_FILE_ERROR} from '../const';
import {FileData} from '../typings';
import {urlMap, loadFile} from 'api';

export const loadFiles = (templateId: string, tabId: string, fieldId: string, files: File[]) => (
    dispatch: Dispatch,
) => {
    const filesDataForUpload = files.map(file => ({
        _id: uuid(),
        templateId,
        tabId,
        fieldId,
        file,
    }));

    const filesData = filesDataForUpload.map(({_id, file: {name}}): FileData => ({_id, name, isLoading: true}));

    dispatch({type: LOAD_FILE_REQUEST, fieldId, filesData});

    const loadFileWithDispatch = loadFile(urlMap.upload(), [LOAD_FILE_SUCCESS, LOAD_FILE_ERROR], dispatch);

    filesDataForUpload.forEach(loadFileWithDispatch);
};
