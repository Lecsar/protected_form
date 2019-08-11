import {SET_FIELD_VALUE, VALIDATE_FIELD} from '../const';
import {SetFieldValue, ValidateField} from '../typings';

export const setFieldValue = (fieldId: string, value: string): SetFieldValue => ({
    type: SET_FIELD_VALUE,
    fieldId,
    value,
});

export const validateField = (fieldId: string): ValidateField => ({
    type: VALIDATE_FIELD,
    fieldId,
});
