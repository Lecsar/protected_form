import {
    SET_ACTIVE_TAB_ID,
    SET_FIELD_VALUE,
    VALIDATE_FIELD,
    LOAD_FILE_REQUEST,
    LOAD_FILE_SUCCESS,
    LOAD_FILE_ERROR,
} from '../const';
import {FileData, TabFormData} from './formDataTypings';
import {LOAD_TEMPLATE_SUCCESS} from 'views/Cabinet/const';

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

export interface LoadFileRequest {
    type: typeof LOAD_FILE_REQUEST;
    fieldId: string;
    filesData: FileData[];
}

export interface LoadFileSuccess {
    type: typeof LOAD_FILE_SUCCESS;
    fieldId: string;
    fileId: string;
}

export interface LoadFileError {
    type: typeof LOAD_FILE_ERROR;
    fieldId: string;
    fileId: string;
    error: boolean;
}

export interface LoadTemplateSuccess {
    type: typeof LOAD_TEMPLATE_SUCCESS;
    tabs: TabFormData[];
}

export type FormAction =
    | LoadTemplateSuccess
    | SetActiveTab
    | SetFieldValue
    | ValidateField
    | LoadFileRequest
    | LoadFileSuccess
    | LoadFileError;
