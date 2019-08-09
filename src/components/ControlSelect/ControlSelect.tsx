import React from 'react';
import {Grid, Select, FormLabel, MenuItem} from '@material-ui/core';
import {useControlSelectStyles} from './style';
import {SelectProps} from '@material-ui/core/Select';

interface ControlSelectProps<T> extends SelectProps {
    options: T[];
    label?: string;
    getOptionKey?: (option: T) => string;
    getOptionName?: (option: T) => string;
    getOptionValue?: (option: T) => string;
}

export const ControlSelect = <T extends {id: string}>({
    label = '',
    options = [],
    getOptionKey = o => o.id,
    getOptionName = (o: any) => o.name,
    getOptionValue = (o: any) => o.value,
}: ControlSelectProps<T>) => {
    const s = useControlSelectStyles();
    // const htmlFor =

    return (
        <Grid>
            <FormLabel className={s.label}>{label}</FormLabel>
            <Select>
                {options.map(option => (
                    <MenuItem key={getOptionKey(option)} value={getOptionValue(option)}>
                        {getOptionName(option)}
                    </MenuItem>
                ))}
            </Select>
        </Grid>
    );
};
