import React, {useState, ChangeEvent} from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';
import Input from '../../../components/Input';
import Dropzone from '../../../components/DropZone';
import Button from '../../../components/Button';

import {downloadData} from '../actions/formActions';

import {TypeOfConnect} from '../../../typings';
import {AppState} from '../../../store';
import s from '../styles/form.module.less';

const mapStateToProps = ({form: {isLoading}}: AppState) => ({isLoading});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({downloadData}, dispatch);

const enhanceStore = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type FormProps = TypeOfConnect<typeof enhanceStore>;

const BaseForm = ({isLoading, downloadData}: FormProps) => {
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState<Blob | null>(null);

    const onChangeInput = ({target: {value}}: ChangeEvent<HTMLInputElement>) => setFileName(value);

    const onDrop = (files: any) => {
        setFile(files[0]);
    };

    const submitForm = () => {
        downloadData(fileName, file);
    };

    return (
        <Grid container justify="center" xs={12}>
            <Grid component="form" container justify="center" alignItems="center" xs={6}>
                <Grid item>
                    <h2 className={s.header}>Форма для загрузки зашифрованных данных</h2>
                </Grid>
                <Grid direction="column" container>
                    <Input disabled={isLoading} label="Название файла" value={fileName} onChange={onChangeInput} />
                    <Dropzone disabled={isLoading} onDropFile={onDrop} />
                </Grid>
                <Grid container justify="center">
                    <Button color="primary" disabled={isLoading} onClick={submitForm} style={{fontSize: '3rem'}}>
                        Загрузить
                    </Button>
                </Grid>

                {isLoading && <CircularProgress size={100} className={s.spinner} />}
            </Grid>
        </Grid>
    );
};

export const Form = enhanceStore(BaseForm);
