/* eslint-disable  react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {AppState} from 'store';
import {TypeOfConnect} from 'typings';
import {Grid, Typography} from '@material-ui/core';
import {loadTemplatesList, loadTemplate} from '../actions';
import {List, BlockSpinner} from 'components';
import {TemplateInfo} from '../typings';
import {CabinetHeader} from '../components/CabinetHeader';
// import {useCabinetStyles} from '../styles/CabinetStyles';

const mapStateToProps = ({cabinet: {templates, isLoading}}: AppState) => ({isLoading, templates});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({loadTemplatesList, loadTemplate}, dispatch);

const enhanceStore = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type BaseFormProps = TypeOfConnect<typeof enhanceStore>;

const BaseCabinet = ({isLoading, templates, loadTemplatesList, loadTemplate}: BaseFormProps) => {
    useEffect(() => {
        loadTemplatesList();
    }, []);

    // const s = useCabinetStyles();

    return (
        <Grid component="main" container direction="row" justify="center">
            {isLoading && <BlockSpinner />}

            <CabinetHeader />
            <Grid component="section" item container direction="column" xs={8} wrap="nowrap">
                <Typography variant="h4">Список доступных шаблонов:</Typography>
                <List<TemplateInfo> options={templates} isButton onOptionClick={loadTemplate} />
            </Grid>
        </Grid>
    );
};

export const Cabinet = enhanceStore(BaseCabinet);
