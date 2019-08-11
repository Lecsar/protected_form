import {SET_ACTIVE_TAB_ID, SET_FIELD_VALUE, VALIDATE_FIELD} from '../const';

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

export type FormAction = SetActiveTab | SetFieldValue | ValidateField;
