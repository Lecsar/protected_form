export interface Block {
    id: string;
    name: string;
}

export enum FieldType {
    input,
    select,
}

export enum ValidationType {
    number,
    string,
    boolean,
}

export interface ValidationRule {
    required: boolean;
    type: ValidationType;
    regExp?: RegExp;
}

export interface Option {
    id: string;
    name: string;
    value: string;
}

export interface BaseData {
    id: string;
    type: FieldType;
    value: string;
    label: string;
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    validationRule?: ValidationRule;
}

export interface InputData extends BaseData {
    type: FieldType.input;
    placeholder: string;
}

export interface SelectData extends BaseData {
    type: FieldType.select;
    options: Option[];
}

export interface DataForValidation {
    isDirty: boolean;
    error: boolean;
    errorMessage: string;
}

export type FieldData = InputData | SelectData;

export type ExtendedFieldData = FieldData & DataForValidation;

export interface BlockData {
    block: Block;
    fields: FieldData[];
}
