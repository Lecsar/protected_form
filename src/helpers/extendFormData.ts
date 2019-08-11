import {BlockData, DataForValidation} from 'views/Form/typings';

const extendedData: DataForValidation = {
    isDirty: false,
    error: false,
    errorMessage: '',
};

export const extendFormData = (data: BlockData[]) =>
    data.map(block => ({...block, fields: block.fields.map(field => ({...field, ...extendedData}))}));
