import React from 'react';
import {Input as BaseInput, Grid} from '@material-ui/core';
import {InputProps} from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import {useInputStyles} from './style';
import { withForm } from 'HOC';

interface ControlInputProps extends Omit<InputProps, 'error'> {
    label?: string;
    error?: boolean | string;
}

export const ControlInput = ({label = '', error = false, id, ...props}: ControlInputProps) => {
    const s = useInputStyles();
    const htmlId = `${label}-${id}`;

    return (
        <Grid item>
            <FormLabel className={s.label} htmlFor={htmlId}>
                {label}
            </FormLabel>
            <BaseInput className={s.inputBlock} classes={{input: s.input}} id={htmlId} error={!!error} {...props} />
            {error && <FormLabel className={s.errorMessage}>{error}</FormLabel>}
        </Grid>
    );
};

export const ControlInputWithForm = withForm(ControlInput);