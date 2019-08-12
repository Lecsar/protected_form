import React from 'react';
import {connect} from 'react-redux';
import {AppState} from 'store';
import {createSelector} from 'reselect';
import {TypeOfConnect} from 'typings';
import {Grid} from '@material-ui/core';
import {Field} from '../components/Field';
import {setFieldsState} from '../helpers';

const getForm = (state: AppState) => state.form;

const getFields = createSelector(
    [getForm],
    setFieldsState,
);

const mapStateToProps = (state: AppState) => ({fields: getFields(state)});

const enhanceStore = connect(mapStateToProps);

type FormFieldsProps = TypeOfConnect<typeof enhanceStore>;

export const FormFieldsBase = ({fields}: FormFieldsProps) => {
    let sizeCounter = 0;

    return (
        <Grid container direction="row" wrap="wrap" spacing={2}>
            {fields.map(({withNewString, ...field}, index) => {
                const fieldBlock = <Field key={field.id} {...field as any} />;

                if (withNewString) {
                    return [<Grid key={`empty-block-${index}`} item xs={(sizeCounter % 12) as any} />, fieldBlock];
                }

                sizeCounter += field.size || 6;

                return fieldBlock;
            })}
        </Grid>
    );
};

export const FormFields = enhanceStore(FormFieldsBase);
