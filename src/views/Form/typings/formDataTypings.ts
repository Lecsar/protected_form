import {FormReducer} from 'reducers/formReducer';
import {TabData, FieldTemplate} from './formTemplateTypings';

interface TabId {
    [fieldId: string]: string;
}

export interface TabDataFromServer {
    [tabId: string]: TabId;
}

export interface TemplateData {
    userId: string;
    templateId: string;
    orgId: string;
    data: TabDataFromServer;
}

export interface FileData {
    _id: string;
    name: string;
    isLoading?: boolean;
    error?: boolean;
}

export interface FieldData {
    value: string | FileData[];
    error: false | string;
    onChange?: (e: React.ChangeEvent<any>) => void;
    onBlur?: (e: React.SyntheticEvent) => void;
    shouldDisabled?: (state: FormReducer) => boolean;
    shouldRender?: (state: FormReducer) => boolean;
}

export type ExtendedFieldData = FieldData & FieldTemplate;

export interface TabFormData {
    tab: TabData;
    fields: ExtendedFieldData[];
}
