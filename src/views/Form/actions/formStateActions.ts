import {SET_ACTIVE_TAB_ID} from '../const';
import {SetActiveTab} from '../typings';

export const setActiveTabId = (activeTabId: string): SetActiveTab => ({
    type: SET_ACTIVE_TAB_ID,
    activeTabId,
});
