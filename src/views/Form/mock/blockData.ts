import {BlockData, FieldType} from '../typings';

export const mockBlockData: BlockData[] = [
    {
        block: {
            id: '1',
            name: 'Общее',
        },
        fields: [
            {id: '1', type: FieldType.input, value: '', label: 'ИНН', placeholder: 'Пожалуйста введите ИНН компании'},
            {
                id: '2',
                type: FieldType.select,
                value: '',
                label: 'Субъект РФ',
                options: [
                    {id: '1', value: 'RZN', name: 'Рязанская область'},
                    {id: '2', value: 'ORL', name: 'Орловская область'},
                    {id: '3', value: 'TMB', name: 'Тамбовская область'},
                ],
            },
            {
                id: '3',
                type: FieldType.select,
                value: '',
                label: 'Стадия реализации проекта',
                options: [
                    {id: '1', value: 'Option1', name: 'Option1'},
                    {id: '2', value: 'Option2', name: 'Option2'},
                    {id: '3', value: 'Option3', name: 'Option3'},
                ],
            },
            {
                id: '4',
                type: FieldType.input,
                value: '',
                label: 'ОГРН',
                placeholder: 'Пожалуйста введите ОГРН компании',
            },
        ],
    },
    {
        block: {
            id: '2',
            name: 'Описание',
        },
        fields: [
            {
                id: '1',
                type: FieldType.input,
                value: '',
                label: 'Отрасль проекта',
                placeholder: 'Пожалуйста введите отрасль проекта компании',
            },
            {
                id: '2',
                type: FieldType.input,
                value: '',
                label: 'Полное название концессионера',
                placeholder: 'Пожалуйста введите полное название концессионера',
            },
            {
                id: '3',
                type: FieldType.select,
                value: '',
                label: 'Тестовый лейбл7',
                options: [
                    {id: '1', value: 'Option1', name: 'Option1'},
                    {id: '2', value: 'Option2', name: 'Option2'},
                    {id: '3', value: 'Option3', name: 'Option3'},
                ],
            },
            {id: '4', type: FieldType.input, value: '', label: 'Телефон', placeholder: 'Пожалуйста введите телефон'},
        ],
    },
    {
        block: {
            id: '3',
            name: 'Характеристики',
        },
        fields: [
            {
                id: '1',
                type: FieldType.select,
                value: '',
                label: 'Тестовый лейбл11',
                options: [
                    {id: '1', value: 'Option1', name: 'Option1'},
                    {id: '2', value: 'Option2', name: 'Option2'},
                    {id: '3', value: 'Option3', name: 'Option3'},
                ],
            },
            {
                id: '2',
                type: FieldType.select,
                value: '',
                label: 'Тестовый лейбл23',
                options: [
                    {id: '1', value: 'Option1', name: 'Option1'},
                    {id: '2', value: 'Option2', name: 'Option2'},
                    {id: '3', value: 'Option3', name: 'Option3'},
                ],
            },
            {
                id: '3',
                type: FieldType.select,
                value: '',
                label: 'Тестовый лейбл441',
                options: [
                    {id: '1', value: 'Option1', name: 'Option1'},
                    {id: '2', value: 'Option2', name: 'Option2'},
                    {id: '3', value: 'Option3', name: 'Option3'},
                ],
            },
            {
                id: '4',
                type: FieldType.input,
                value: '',
                label: 'Юридический адрес',
                placeholder: 'Подалуйста введите юридический адрес',
            },
        ],
    },
];
