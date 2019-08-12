import {BlockData, FormAction, TabDataFromServer, BlockTemplate} from 'views/Form/typings';
import {mockData, mockTemplate} from 'views/Form/mock';
import {SET_ACTIVE_TAB_ID, SET_FIELD_VALUE, VALIDATE_FIELD} from 'views/Form/const';
import produce from 'immer';
// import {extendFormData} from 'helpers';
import {validate} from 'helpers';

const mergeTemplateWithValue = (templates: BlockTemplate[], data: TabDataFromServer): BlockData[] =>
    templates.map(({tab, fields}) => ({
        tab,
        fields: fields.map(field => ({...field, value: data[tab.id][field.id], error: false})),
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
        default:
            return state;
    }
};
