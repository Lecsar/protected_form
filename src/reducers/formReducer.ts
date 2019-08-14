import produce from 'immer';
import {TabFormData, FormAction, FieldData, FileData} from 'views/Form/typings';
import {
    SET_ACTIVE_TAB_ID,
    SET_FIELD_VALUE,
    VALIDATE_FIELD,
    LOAD_FILE_REQUEST,
    LOAD_FILE_SUCCESS,
    LOAD_FILE_ERROR,
} from 'views/Form/const';
import {validate} from 'helpers';
import {LOAD_TEMPLATE_SUCCESS} from 'views/Cabinet/const';
import {mockTemplate} from 'views/Form/mock';
import {createTemplate} from 'views/Cabinet/helpers';

export interface FormReducer {
    isLoading: boolean;
    templateId: string;
    activeTabId: string;
    tabs: TabFormData[];
}

const initialState: FormReducer = {
    isLoading: false,
    templateId: '',
    activeTabId: '1',
    tabs: createTemplate(mockTemplate, null),
};

const getCurrentField = (draft: FormReducer, fieldId: string) =>
    draft.tabs.find(item => draft.activeTabId === item.tab._id)!.fields.find(({_id}) => fieldId === _id)!;

const getFile = (draft: FormReducer, fieldId: string, fileId: string) => {
    const files = getCurrentField(draft, fieldId).value as FileData[];
    return files.find(({_id}) => fileId === _id)!;
};

export const formReducer = (state = initialState, action: FormAction): FormReducer => {
    switch (action.type) {
        case LOAD_TEMPLATE_SUCCESS:
            return {...state, tabs: action.tabs, activeTabId: action.tabs[0].tab._id};
        case SET_ACTIVE_TAB_ID:
            return {...state, activeTabId: action.activeTabId};
        case SET_FIELD_VALUE:
            return produce(state, d => {
                getCurrentField(d, action.fieldId).value = action.value;
            });
        case VALIDATE_FIELD:
            return validate(state, action.fieldId);
        case LOAD_FILE_REQUEST:
            return produce(state, d => {
                const currentField = getCurrentField(d, action.fieldId);
                const files = currentField.value as FileData[];
                currentField.value = [...files, ...action.filesData];
            });
        case LOAD_FILE_SUCCESS:
            return produce(state, d => {
                const file = getFile(d, action.fieldId, action.fileId);
                file.isLoading = false;
            });
        case LOAD_FILE_ERROR:
            return produce(state, d => {
                const file = getFile(d, action.fieldId, action.fileId);
                file.isLoading = false;
                file.error = action.error;
            });
        default:
            return state;
    }
};
