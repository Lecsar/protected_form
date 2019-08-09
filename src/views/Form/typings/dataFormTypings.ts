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
    type: ValidationType;
    regExp: RegExp;
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

export type FieldData = InputData | SelectData;

export interface BlockData {
    block: Block;
    fields: FieldData[];
}
