import {Dispatch} from 'redux';

interface LoadFileData {
    _id: string;
    templateId: string;
    tabId: string;
    fieldId: string;
    file: File;
    [key: string]: any;
}

export const loadFile = (url: string, [successActionType, errorActionType]: any, dispatch: Dispatch) => (
    file: LoadFileData,
) => {
    const body = new FormData();

    Object.keys(file).forEach(key => body.append(key, file[key]));

    fetch(url, {
        method: 'POST',
        body,
    })
        .then(res => res.json())
        .then(data => {
            dispatch({type: successActionType, fieldId: file.fieldId, fileId: file._id});
        })
        .catch(error => {
            console.error(error);
            dispatch({type: errorActionType, fieldId: file.fieldId, fileId: file._id, error});
        });
};
