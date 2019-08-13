export interface TabData {
    _id: string;
    name: string;
}

export enum FieldType {
    input = 'Input',
    select = 'Select',
    file = 'File',
}

export enum ValidationType {
    number = 'Number',
    string = 'String',
    boolean = 'Boolean',
}

export interface ValidationRule {
    required: boolean;
    type?: ValidationType;
    regExp?: RegExp;
}

export interface Option {
    id: string;
    name: string;
    value: string;
}

export interface Template {
    _id: string;
    type: FieldType;
    label: string;
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    validationRule?: ValidationRule;
}

export interface InputTemplate extends Template {
    type: FieldType.input;
    placeholder: string;
}

export interface SelectTemplate extends Template {
    type: FieldType.select;
    options: Option[];
}

export interface FileTemplate extends Template {
    type: FieldType.file;
}

export type FieldTemplate = InputTemplate | SelectTemplate | FileTemplate;

export interface TabTemplate {
    _id: string;
    name: string;
    fields: FieldTemplate[];
}
