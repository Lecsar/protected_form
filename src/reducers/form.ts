import {BlockData, FormAction, TabDataFromServer, BlockTemplate, FieldType} from 'views/Form/typings';
import {mockData, mockTemplate} from 'views/Form/mock';
import {SET_ACTIVE_TAB_ID, SET_FIELD_VALUE, VALIDATE_FIELD, LOAD_FILE_REQUEST} from 'views/Form/const';
import produce from 'immer';
import {validate} from 'helpers';

const mergeTemplateWithValue = (templates: BlockTemplate[], data: TabDataFromServer): BlockData[] =>
    templates.map(({tab, fields}) => ({
        tab,
        fields: fields.map(field => ({
            ...field,
            value:
                field.type === FieldType.file
                    ? []
                    : data[tab.id][field.id],
            error: false,
            // withNewString: field.id === '3',
            // shouldDisabled: () => true,
        })),
    }));

export interface FormReducer {
    isLoading: boolean;
    activeTabId: string | null;
    blocks: BlockData[];
}

const initialState: FormReducer = {
    isLoading: false,
    activeTabId: '1',
    blocks: mergeTemplateWithValue(mockTemplate, mockData),
};

export default (state = initialState, action: FormAction): FormReducer => {
    switch (action.type) {
        case SET_ACTIVE_TAB_ID:
            return {...state, activeTabId: action.activeTabId};
        case SET_FIELD_VALUE:
            return produce(state, draft => {
                const activeBlock = draft.blocks.find(item => draft.activeTabId === item.tab.id)!;
                activeBlock.fields.find(({id}) => action.fieldId === id)!.value = action.value;
            });
        case VALIDATE_FIELD:
            return validate(state, action.fieldId);
        case LOAD_FILE_REQUEST:
            return produce(state, draft => {
                const activeBlock = draft.blocks.find(item => draft.activeTabId === item.tab.id)!;
                const currentField = activeBlock.fields.find(({id}) => action.fieldId === id)!;
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
