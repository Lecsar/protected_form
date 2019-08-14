import {CabinetAction, TemplateInfo} from 'views/Cabinet/typings';
import {
    LOAD_TEMPLATES_LIST_REQUEST,
    LOAD_TEMPLATES_LIST_SUCCESS,
    LOAD_TEMPLATES_LIST_ERROR,
    LOAD_TEMPLATE_SUCCESS,
    LOAD_TEMPLATE_REQUEST,
} from 'views/Cabinet/const';

export interface CabinetReducer {
    isLoading: boolean;
    error: boolean | string;
    templates: TemplateInfo[];
}

const initialState: CabinetReducer = {
    isLoading: false,
    error: false,
    templates: [],
};

export const cabinetReducer = (state = initialState, action: CabinetAction): CabinetReducer => {
    switch (action.type) {
        case LOAD_TEMPLATES_LIST_REQUEST:
            return {...state, isLoading: true};
        case LOAD_TEMPLATES_LIST_SUCCESS:
            return {...state, isLoading: false, templates: action.response};
        case LOAD_TEMPLATES_LIST_ERROR:
            return {...state, isLoading: false, error: action.error};
        case LOAD_TEMPLATE_REQUEST:
            return {...state, isLoading: true};
        case LOAD_TEMPLATE_SUCCESS:
            return {...state, isLoading: false};
        default:
            return state;
    }
};
