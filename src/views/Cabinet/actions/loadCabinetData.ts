import {Dispatch} from 'redux';
import {API_ADRESS, ROUTING, SUCCESS_STATUS} from 'const';
import {TemplateData} from 'views/Form/typings';
import {
    LOAD_TEMPLATES_LIST_REQUEST,
    LOAD_TEMPLATES_LIST_SUCCESS,
    LOAD_TEMPLATES_LIST_ERROR,
    LOAD_TEMPLATE_REQUEST,
    LOAD_TEMPLATE_SUCCESS,
    LOAD_TEMPLATE_ERROR,
} from '../const';
import {createTemplate} from '../helpers';
import {TemplateInfo, Template} from '../typings';

export const loadTemplatesList = () => ({
    types: [LOAD_TEMPLATES_LIST_REQUEST, LOAD_TEMPLATES_LIST_SUCCESS, LOAD_TEMPLATES_LIST_ERROR],
    callAPI: async () => {
        const response = await fetch(`${API_ADRESS}/templates/list`);
        return await response.json();
    },
});

export const loadTemplate = ({_id}: TemplateInfo) => (dispatch: Dispatch) => {
    dispatch({type: LOAD_TEMPLATE_REQUEST});

    const templateRequest: Promise<Template> = fetch(`${API_ADRESS}/templates/${_id}`)
        .then(res => res.json())
        .catch(error => {
            console.error(error);
            dispatch({type: LOAD_TEMPLATE_ERROR, error});
            return [];
        });

    const dataRequest: Promise<TemplateData | {data: null}> = fetch(`${API_ADRESS}/data/${_id}`)
        .then(res => {
            if (res.status === SUCCESS_STATUS) {
                return res.json();
            }

            return {data: null};
        })
        .catch(error => {
            console.error(error);
            dispatch({type: LOAD_TEMPLATE_ERROR, error});
            return {};
        });

    Promise.all([templateRequest, dataRequest])
        .then(([template, {data}]) => {
            const tabs = createTemplate(template.tabs, data);

            dispatch({type: LOAD_TEMPLATE_SUCCESS, tabs});
            dispatch({type: ROUTING, payload: {method: 'push', nextUrl: '/form'}});
        })
        .catch(error => {
            dispatch({type: LOAD_TEMPLATE_ERROR, error});
        });
};
