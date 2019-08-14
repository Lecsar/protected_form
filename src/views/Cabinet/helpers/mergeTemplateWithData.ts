import {TabTemplate, FieldType, TabDataFromServer, TabFormData, FieldData, FileData} from 'views/Form/typings';

interface DataOptions {
    tabId: string;
    fieldId: string;
    fieldType: FieldType;
}

const setDefaultData = (fieldType: FieldType) => {
    switch (fieldType) {
        case FieldType.file:
            // return [{_id: '6432876432', name: 'test', error: true}] as FileData[];
            return [];
        default:
            return '';
    }
};

const setData = ({tabId, fieldId, fieldType}: DataOptions, templateData: TabDataFromServer | null) => {
    const data = {error: false} as FieldData;

    if (templateData) {
        data.value = fieldType === FieldType.file ? [] : templateData[tabId][fieldId];
    } else {
        data.value = setDefaultData(fieldType);
    }

    return data;
};

export const createTemplate = (tabs: TabTemplate[], templateData: TabDataFromServer | null): TabFormData[] =>
    tabs.map(({fields, ...tabData}) => ({
        tab: {...tabData},
        fields: fields.map(field => ({
            ...field,
            ...setData(
                {
                    tabId: tabData._id,
                    fieldId: field._id,
                    fieldType: field.type,
                },
                templateData,
            ),
        })),
    }));
