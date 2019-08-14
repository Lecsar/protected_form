import {API_ADRESS} from 'const';

export const urlMap = {
    getTemplatesList: () => `${API_ADRESS}/templates/list`,
    getTemplate: (templateId: string) => `${API_ADRESS}/templates/${templateId}`,
    getTemplateData: (templateId: string) => `${API_ADRESS}/data/${templateId}`,
    upload: () => `${API_ADRESS}/upload`,
};
