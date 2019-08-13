import {FormReducer} from 'reducers/form';
import {TabData, FieldTemplate} from './formTemplateTypings';

interface TabId {
    [x: string]: string;
}

export interface TabDataFromServer {
    [x: string]: TabId;
}

export interface FileData {
    id: string;
    name: string;
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

export interface BlockData {
    tab: TabData;
    fields: ExtendedFieldData[];
}
