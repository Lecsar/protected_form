import {BlockTemplate, FieldType, ValidationType} from '../typings';

export const mockTemplate: BlockTemplate[] = [
    {
        tab: {
            id: '1',
            name: 'Общее',
        },
        fields: [
            {
                id: '1',
                type: FieldType.input,
                label: 'ИНН',
                placeholder: 'Пожалуйста введите ИНН компании',
                size: 3,
                validationRule: {
                    required: true,
                    type: ValidationType.number,
                },
            },
            {
                id: '2',
                type: FieldType.select,
                label: 'Субъект РФ',
                options: [
                    {id: '1', value: 'RZN', name: 'Рязанская область'},
                    {id: '2', value: 'ORL', name: 'Орловская область'},
                    {id: '3', value: 'TMB', name: 'Тамбовская область'},
                ],
                size: 3,
            },
            {
                id: '3',
                type: FieldType.select,
                label: 'Стадия реализации проекта',
                options: [
                    {id: '1', value: 'Option1', name: 'Option1'},
                    {id: '2', value: 'Option2', name: 'Option2'},
                    {id: '3', value: 'Option3', name: 'Option3'},
                ],
                size: 3,
                validationRule: {
                    required: true,
                },
            },
            {
                id: '4',
                type: FieldType.input,
                label: 'ОГРН',
                placeholder: 'Пожалуйста введите ОГРН компании',
                size: 3,
            },
            {id: '5', type: FieldType.input, label: 'ИНН', placeholder: 'Пожалуйста введите ИНН компании'},
            {
                id: '6',
                type: FieldType.select,
                label: 'Субъект РФ',
                options: [
                    {id: '1', value: 'RZN', name: 'Рязанская область'},
                    {id: '2', value: 'ORL', name: 'Орловская область'},
                    {id: '3', value: 'TMB', name: 'Тамбовская область'},
                ],
            },
            {
                id: '7',
                type: FieldType.select,
                label: 'Стадия реализации проекта',
                options: [
                    {id: '1', value: 'Option1', name: 'Option1'},
                    {id: '2', value: 'Option2', name: 'Option2'},
                    {id: '3', value: 'Option3', name: 'Option3'},
                ],
            },
            {
                id: '8',
                type: FieldType.input,
                label: 'ОГРН',
                placeholder: 'Пожалуйста введите ОГРН компании',
            },
            {
                id: '9',
                type: FieldType.input,
                label: 'ИНН',
                placeholder: 'Пожалуйста введите ИНН компании',
                size: 4,
            },
            {
                id: '10',
                type: FieldType.select,
                label: 'Субъект РФ',
                options: [
                    {id: '1', value: 'RZN', name: 'Рязанская область'},
                    {id: '2', value: 'ORL', name: 'Орловская область'},
                    {id: '3', value: 'TMB', name: 'Тамбовская область'},
                ],
                size: 4,
            },
            {
                id: '11',
                type: FieldType.select,
                label: 'Стадия реализации проекта',
                options: [
                    {id: '1', value: 'Option1', name: 'Option1'},
                    {id: '2', value: 'Option2', name: 'Option2'},
                    {id: '3', value: 'Option3', name: 'Option3'},
                ],
                size: 4,
            },
            {
                id: '12',
                type: FieldType.file,
                label: 'ОГРН',
                size: 12,
                validationRule: {
                    required: true,
                }
            },
        ],
    },
    {
        tab: {
            id: '2',
            name: 'Характеристики',
        },
        fields: [
            {
                id: '1',
                type: FieldType.input,
                label: 'ИНН',
                placeholder: 'Пожалуйста введите ИНН компании',
                size: 3,
                validationRule: {
                    required: true,
                    type: ValidationType.number,
                },
            },
            {
                id: '2',
                type: FieldType.select,
                label: 'Субъект РФ',
                options: [
                    {id: '1', value: 'RZN', name: 'Рязанская область'},
                    {id: '2', value: 'ORL', name: 'Орловская область'},
                    {id: '3', value: 'TMB', name: 'Тамбовская область'},
                ],
                size: 3,
            },
            {
                id: '3',
                type: FieldType.select,
                label: 'Стадия реализации проекта',
                options: [
                    {id: '1', value: 'Option1', name: 'Option1'},
                    {id: '2', value: 'Option2', name: 'Option2'},
                    {id: '3', value: 'Option3', name: 'Option3'},
                ],
                size: 3,
                validationRule: {
                    required: true,
                },
            },
            {
                id: '4',
                type: FieldType.input,
                label: 'ОГРН',
                placeholder: 'Пожалуйста введите ОГРН компании',
                size: 3,
            },
            {id: '5', type: FieldType.input, label: 'ИНН', placeholder: 'Пожалуйста введите ИНН компании'},
            {
                id: '6',
                type: FieldType.select,
                label: 'Субъект РФ',
                options: [
                    {id: '1', value: 'RZN', name: 'Рязанская область'},
                    {id: '2', value: 'ORL', name: 'Орловская область'},
                    {id: '3', value: 'TMB', name: 'Тамбовская область'},
                ],
            },
        ],
    },
    {
        tab: {
            id: '3',
            name: 'Свойства',
        },
        fields: [
            {
                id: '1',
                type: FieldType.input,
                label: 'ИНН',
                placeholder: 'Пожалуйста введите ИНН компании',
                size: 3,
                validationRule: {
                    required: true,
                    type: ValidationType.number,
                },
            },
            {
                id: '2',
                type: FieldType.select,
                label: 'Субъект РФ',
                options: [
                    {id: '1', value: 'RZN', name: 'Рязанская область'},
                    {id: '2', value: 'ORL', name: 'Орловская область'},
                    {id: '3', value: 'TMB', name: 'Тамбовская область'},
                ],
                size: 3,
            },
            {
                id: '3',
                type: FieldType.select,
                label: 'Стадия реализации проекта',
                options: [
                    {id: '1', value: 'Option1', name: 'Option1'},
                    {id: '2', value: 'Option2', name: 'Option2'},
                    {id: '3', value: 'Option3', name: 'Option3'},
                ],
                size: 3,
                validationRule: {
                    required: true,
                },
            },
        ],
    },
];
