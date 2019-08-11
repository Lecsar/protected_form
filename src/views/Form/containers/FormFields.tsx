import React, {useCallback} from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {AppState} from 'store';
import {createSelector} from 'reselect';
import {TypeOfConnect} from 'typings';
import {Grid} from '@material-ui/core';
import {Field} from '../components/Field';
import {setFieldValue, validateField} from '../actions';

const getActiveTabId = (state: AppState) => state.form.activeTabId!;
const getblocks = (state: AppState) => state.form.blocks!;

const getVisibleFields = createSelector(
    [getActiveTabId, getblocks],
    (activeTabId, blocks) => blocks.find(({block: {id}}) => activeTabId === id)!.fields,
);

const mapStateToProps = (state: AppState) => ({fields: getVisibleFields(state)});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({setFieldValue, validateField}, dispatch);

const enhanceStore = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type FormFieldsProps = TypeOfConnect<typeof enhanceStore>;

export const FormFieldsBase = ({fields, setFieldValue, validateField}: FormFieldsProps) => {

    return (
        <Grid container direction="row" wrap="wrap" spacing={2}>
            {fields.map(field => (
                <Field key={field.id} {...field} setValue={setFieldValue} validateField={validateField} />
            ))}
        </Grid>
    );
};

export const FormFields = enhanceStore(FormFieldsBase);
