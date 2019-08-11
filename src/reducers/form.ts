import {BlockData, FormAction} from 'views/Form/typings';
import {mockBlockData} from 'views/Form/mock';
import {SET_ACTIVE_TAB_ID, SET_FIELD_VALUE, VALIDATE_FIELD} from 'views/Form/const';
import produce from 'immer';
import {extendFormData} from 'helpers';
import {validate} from 'helpers';

const blocks = extendFormData(mockBlockData);
type ExtendedBlockData = typeof blocks;

export interface FormReducer {
    isLoading: boolean;
    activeTabId: string | null;
    blocks: ExtendedBlockData;
}

const initialState: FormReducer = {
    isLoading: false,
    activeTabId: '1',
    blocks,
};

export default (state = initialState, action: FormAction): FormReducer => {
    switch (action.type) {
        case SET_ACTIVE_TAB_ID:
            return {...state, activeTabId: action.activeTabId};
        case SET_FIELD_VALUE:
            return produce(state, draft => {
                const activeBlock = draft.blocks.find(item => draft.activeTabId === item.block.id)!;
                activeBlock.fields.find(({id}) => action.fieldId === id)!.value = action.value;
            });
        case VALIDATE_FIELD:
            return validate(state, action.fieldId);
        default:
            return state;
    }
};
