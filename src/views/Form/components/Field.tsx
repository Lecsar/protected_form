import React from 'react';
import {Grid, Select, FormControl, InputLabel, MenuItem} from '@material-ui/core';
import {FieldData, FieldType} from '../typings';
import {ControlInput, ControlSelect} from 'components';

export const Field = (props: FieldData) => {
    const createField = (props: FieldData) => {
        switch (props.type) {
            case FieldType.input:
                return (
                    <ControlInput
                        id={props.id}
                        label={props.label}
                        placeholder={props.placeholder || `Введите название поля ${props.label}...`}
                    />
                );
            case FieldType.select:
                return (
                    <ControlSelect label={props.label} options={props.options} />
                    // <FormControl>
                    //     <InputLabel htmlFor={`${props.id}-${props.type}`}>{props.label}</InputLabel>
                    //     <Select
                    //         value={props.value || props.options![0].value}
                    //         // onChange={handleChange}
                    //         inputProps={{
                    //             name: props.type,
                    //             id: `${props.id}-${props.type}`,
                    //         }}
                    //     >
                    //         {props.options.map(({id, name, value}) => (
                    //             <MenuItem key={id} value={value}>
                    //                 {name}
                    //             </MenuItem>
                    //         ))}
                    //     </Select>
                    // </FormControl>
                );
            default:
                console.error(`Неизвестный FieldType`);
                return null;
        }
    };

    return (
        <Grid item xs={12}>
            <Grid item>{createField(props)}</Grid>
        </Grid>
    );
};
