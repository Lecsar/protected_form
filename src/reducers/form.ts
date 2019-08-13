import produce from 'immer';
import {TabFormData, FormAction} from 'views/Form/typings';
import {SET_ACTIVE_TAB_ID, SET_FIELD_VALUE, VALIDATE_FIELD, LOAD_FILE_REQUEST} from 'views/Form/const';
import {validate} from 'helpers';
import {LOAD_TEMPLATE_SUCCESS} from 'views/Cabinet/const';

export interface FormReducer {
    isLoading: boolean;
    activeTabId: string | null;
    tabs: TabFormData[];
}

const initialState: FormReducer = {
    isLoading: false,
    activeTabId: null,
    tabs: [],
};

export default (state = initialState, action: FormAction): FormReducer => {
    switch (action.type) {
        case LOAD_TEMPLATE_SUCCESS:
            return {...state, tabs: action.tabs, activeTabId: action.tabs[0].tab._id};
        case SET_ACTIVE_TAB_ID:
            return {...state, activeTabId: action.activeTabId};
        case SET_FIELD_VALUE:
            return produce(state, draft => {
                const activeBlock = draft.tabs.find(item => draft.activeTabId === item.tab._id)!;
                activeBlock.fields.find(({_id}) => action.fieldId === _id)!.value = action.value;
            });
        case VALIDATE_FIELD:
            return validate(state, action.fieldId);
        case LOAD_FILE_REQUEST:
            return produce(state, draft => {
                const activeBlock = draft.tabs.find(item => draft.activeTabId === item.tab._id)!;
                const currentField = activeBlock.fields.find(({_id}) => action.fieldId === _id)!;
                if (Array.isArray(currentField.value)) {
                    currentField.value = currentField.value
                        ? [...currentField.value, ...action.filesData]
                        : action.filesData;
                }
            });
        default:
            return state;
    }
};
