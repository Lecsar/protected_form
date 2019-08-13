import {
    LOAD_TEMPLATES_LIST_REQUEST,
    LOAD_TEMPLATES_LIST_SUCCESS,
    LOAD_TEMPLATES_LIST_ERROR,
    LOAD_TEMPLATE_REQUEST,
    LOAD_TEMPLATE_SUCCESS,
} from '../const';
import {TemplateInfo} from './cabinetDataTypings';

export interface LoadTemplatesListRequest {
    type: typeof LOAD_TEMPLATES_LIST_REQUEST;
}

export interface LoadTemplatesListSuccess {
    type: typeof LOAD_TEMPLATES_LIST_SUCCESS;
    response: TemplateInfo[];
}

export interface LoadTemplatesListError {
    type: typeof LOAD_TEMPLATES_LIST_ERROR;
    error: boolean | string;
}

export interface LoadTemplateRequest {
    type: typeof LOAD_TEMPLATE_REQUEST;
}

export interface LoadTemplateSuccess {
    type: typeof LOAD_TEMPLATE_SUCCESS;
}

export type CabinetAction =
    | LoadTemplatesListRequest
    | LoadTemplatesListSuccess
    | LoadTemplatesListError
    | LoadTemplateRequest
    | LoadTemplateSuccess;
