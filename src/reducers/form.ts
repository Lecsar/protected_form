import {BlockData, FormAction} from 'views/Form/typings';
import {mockBlockData} from 'views/Form/mock';
import {SET_ACTIVE_TAB_ID} from 'views/Form/const';

interface FormReducer {
    isLoading: boolean;
    activeTabId: string | null;
    blocks: BlockData[];
}

const initialState: FormReducer = {
    isLoading: false,
    activeTabId: '1',
    blocks: mockBlockData,
};

export default (state = initialState, action: FormAction) => {
    switch (action.type) {
        case SET_ACTIVE_TAB_ID:
            return {...state, activeTabId: action.activeTabId};
        default:
            return state;
    }
};
