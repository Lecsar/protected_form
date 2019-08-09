import {SET_ACTIVE_TAB_ID} from '../const';

interface SetActiveTab {
    type: typeof SET_ACTIVE_TAB_ID;
    activeTabId: string;
}

export type FormAction = SetActiveTab;
