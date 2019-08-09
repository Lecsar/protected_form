import React from 'react';
import {Input as BaseInput, Grid} from '@material-ui/core';
import {InputProps} from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import {useInputStyles} from './style';

interface ControlInputProps extends InputProps {
    label?: string;
}

export const ControlInput = ({label = '', id, ...props}: ControlInputProps) => {
    const s = useInputStyles();
    const htmlId = `${label}-${id}`;

    return (
        <Grid item>
            <FormLabel className={s.label} htmlFor={htmlId}>
                {label}
            </FormLabel>
            <BaseInput className={s.inputBlock} classes={{input: s.input}} id={htmlId} {...props} />
        </Grid>
    );
};
