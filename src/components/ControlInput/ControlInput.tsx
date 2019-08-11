import React from 'react';
import {Input as BaseInput, Grid} from '@material-ui/core';
import {InputProps} from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import {useInputStyles} from './style';

interface ControlInputProps extends InputProps {
    label?: string;
    errorMessage?: string;
}

export const ControlInput = ({label = '', errorMessage = '', id, ...props}: ControlInputProps) => {
    const s = useInputStyles();
    const htmlId = `${label}-${id}`;

    return (
        <Grid item>
            <FormLabel className={s.label} htmlFor={htmlId}>
                {label}
            </FormLabel>
            <BaseInput className={s.inputBlock} classes={{input: s.input}} id={htmlId} {...props} />
            {errorMessage && <FormLabel className={s.errorMessage}>{errorMessage}</FormLabel>}
        </Grid>
    );
};
