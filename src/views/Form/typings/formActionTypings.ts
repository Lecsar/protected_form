import {
    SET_ACTIVE_TAB_ID,
    SET_FIELD_VALUE,
    VALIDATE_FIELD,
    LOAD_FILE_REQUEST,
    LOAD_FILE_SUCCESS,
    LOAD_FILE_ERROR,
} from '../const';
import {FileData} from './formDataTypings';

export interface SetActiveTab {
    type: typeof SET_ACTIVE_TAB_ID;
    activeTabId: string;
}

export interface SetFieldValue {
    type: typeof SET_FIELD_VALUE;
    fieldId: string;
    value: string;
}

export interface ValidateField {
    type: typeof VALIDATE_FIELD;
    fieldId: string;
}

export interface LoadFilesRequest {
    type: typeof LOAD_FILE_REQUEST;
    fieldId: string;
    filesData: FileData[];
}

export interface LoadFileSuccess {
    type: typeof LOAD_FILE_SUCCESS;
}

export interface LoadFileError {
    type: typeof LOAD_FILE_ERROR;
}

export type FormAction =
    | SetActiveTab
    | SetFieldValue
    | ValidateField
    | LoadFilesRequest
    | LoadFileSuccess
    | LoadFileError;
