/* eslint-disable  react-hooks/exhaustive-deps */
import React, {useCallback, memo} from 'react';
import {Grid} from '@material-ui/core';
import {ControlInput, ControlSelect} from 'components';
import {areEqual} from 'helpers';
import {ExtendedFieldData, FieldType, Option, SetFieldValue, ValidateField} from '../typings';

interface FieldActions {
    setValue: (id: string, value: string) => SetFieldValue;
    validateField: (id: string) => ValidateField;
}

type FieldProps = FieldActions & ExtendedFieldData;

const DEFAULT_FIELD_SIZE = 6;

export const BaseField = (props: FieldProps) => {
    const onChange = useCallback(e => props.setValue(props.id, e.target.value), [props.id, props.setValue]);
    const onBlur = useCallback(e => props.validateField(props.id), [props.id, props.validateField]);

    const createField = (props: FieldProps) => {
        switch (props.type) {
            case FieldType.input:
                return (
                    <ControlInput
                        id={props.id}
                        value={props.value}
                        label={props.label}
                        placeholder={props.placeholder}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={props.error}
                        errorMessage={props.errorMessage}
                    />
                );
            case FieldType.select:
                return (
                    <ControlSelect<Option>
                        id={props.id}
                        value={props.value}
                        label={props.label}
                        options={props.options}
                        onBlur={onBlur}
                        error={props.error}
                        errorMessage={props.errorMessage}
                    />
                );
            default:
                console.error(`Неизвестный FieldType`);
                return null;
        }
    };

    return (
        <Grid item xs={props.size ? props.size : DEFAULT_FIELD_SIZE}>
            <Grid item>{createField(props)}</Grid>
        </Grid>
    );
};

export const Field = memo(BaseField, areEqual);
