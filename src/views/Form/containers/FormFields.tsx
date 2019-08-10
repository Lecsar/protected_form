import React from 'react';
import {FieldData} from '../typings';
import {Grid} from '@material-ui/core';
import {Field} from '../components/Field';

interface FormFieldsProps {
    fields: FieldData[];
}

export const FormFields = ({fields}: FormFieldsProps) => {
    return (
        <Grid container direction='row' wrap='wrap' spacing={2}>
            {fields.map(field => (
                <Field key={field.id} {...field} />
            ))}
        </Grid>
    );
};
