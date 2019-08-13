/* eslint-disable  react-hooks/exhaustive-deps */
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {TypeOfConnect} from 'typings';
import {AppState} from 'store';
import {createSelector} from 'reselect';
import {Grid} from '@material-ui/core';
import {setActiveTabId} from '../actions';
import {FormTabs} from '../components/FormTabs';
import {useFormStyles} from '../styles';
import {FormFields} from './FormFields';

const getBlocks = (state: AppState) => state.form.tabs;
const getTabs = createSelector(
    [getBlocks],
    blocks => blocks.map(({tab}) => tab),
);

const mapStateToProps = (state: AppState) => ({
    activeTabId: state.form.activeTabId,
    tabs: getTabs(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({setActiveTabId}, dispatch);

const enhanceStore = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type BaseFormProps = TypeOfConnect<typeof enhanceStore>;

const BaseForm = ({activeTabId, tabs, setActiveTabId}: BaseFormProps) => {
    const s = useFormStyles();

    return (
        <Grid component="main" container direction="row" justify="center">
            <Grid className={s.form} component="section" item container direction="column" xs={8} wrap="nowrap">
                <Grid className={s.header} component="h1" item>
                    POC формы заполнения анкеты
                </Grid>
                {activeTabId && <FormTabs activeTabId={activeTabId} tabs={tabs} setTabActiveTabId={setActiveTabId} />}
                {activeTabId && <FormFields />}
            </Grid>
        </Grid>
    );
};

export const Form = enhanceStore(BaseForm);
