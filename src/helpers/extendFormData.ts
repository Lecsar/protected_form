import {BlockData} from 'views/Form/typings';

const extendedData = {
    error: false,
    // shouldDisabled: () => true,
};

export const extendFormData = (data: BlockData[]) =>
    data.map(block => ({...block, fields: block.fields.map(field => ({...field, ...extendedData}))}));
