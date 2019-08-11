import React from 'react';
import {Grid, Select, FormLabel, MenuItem} from '@material-ui/core';
import {SelectProps} from '@material-ui/core/Select';
import {useControlSelectStyles} from './ControlSelectStyles';

interface ControlSelectProps<T> extends SelectProps {
    label?: string;
    errorMessage?: string;
    options: T[];
    getOptionKey?: (option: T) => string;
    getOptionName?: (option: T) => string;
    getOptionValue?: (option: T) => string;
}

export const ControlSelect = <T extends {id: string}>({
    id,
    label = '',
    errorMessage = '',
    value,
    options = [],
    getOptionKey = o => o.id,
    getOptionName = (o: any) => o.name,
    getOptionValue = (o: any) => o.value,
    ...otherProps
}: ControlSelectProps<T>) => {
    const s = useControlSelectStyles();
    const htmlFor = `${label}-${id}`;

    return (
        <Grid item container direction="column" xs={12}>
            <FormLabel htmlFor={htmlFor} className={s.label}>
                {label}
            </FormLabel>
            <Select
                id={htmlFor}
                className={s.select}
                classes={{root: s.root, icon: s.icon}}
                value={value || getOptionValue(options[0])}
                {...otherProps}
            >
                {options.map(option => (
                    <MenuItem className={s.option} key={getOptionKey(option)} value={getOptionValue(option)}>
                        {getOptionName(option)}
                    </MenuItem>
                ))}
            </Select>
            {errorMessage && <FormLabel className={s.errorMessage}>{errorMessage}</FormLabel>}
        </Grid>
    );
};
