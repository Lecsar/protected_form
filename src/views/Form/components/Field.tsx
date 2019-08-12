/* eslint-disable  react-hooks/exhaustive-deps */
import React, {memo} from 'react';
import {Grid} from '@material-ui/core';
import {ControlInput, ControlSelect} from 'components';
import {areEqual} from 'helpers';
import {withForm} from 'HOC';
import {ExtendedFieldData, FieldType} from '../typings';

type FieldProps = ExtendedFieldData;

const DEFAULT_FIELD_SIZE = 6;

export const BaseField = ({type, validationRule, size, ...props}: FieldProps) => {
    const createField = (type: FieldType) => {
        switch (type) {
            case FieldType.input:
                return ControlInput;
            case FieldType.select:
                return ControlSelect;
            default:
                console.error('Неизвестный FieldType');
                return () => null;
        }
    };

    const Field = createField(type);

    return (
        <Grid item xs={size || DEFAULT_FIELD_SIZE}>
            <Grid item>
                <Field {...props as any} />
            </Grid>
        </Grid>
    );
};

const FormField = withForm(BaseField);
export const Field = memo(FormField, areEqual);
