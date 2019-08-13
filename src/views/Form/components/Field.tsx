/* eslint-disable  react-hooks/exhaustive-deps */
import React, {memo} from 'react';
import {Grid} from '@material-ui/core';
import {DropzoneWithLoad, ControlInputWithForm, ControlSelectWithForm} from 'components';
import {areEqual} from 'helpers';
import {ExtendedFieldData, FieldType} from '../typings';

type FieldProps = ExtendedFieldData;

const DEFAULT_FIELD_SIZE = 6;

export const FormField = ({type, size, ...props}: FieldProps) => {
    const createField = (type: FieldType) => {
        switch (type) {
            case FieldType.input:
                return ControlInputWithForm;
            case FieldType.select:
                return ControlSelectWithForm;
            case FieldType.file:
                return DropzoneWithLoad;
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

export const Field = memo(FormField, areEqual);
