import React, {useState, ChangeEvent} from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {Grid, Button, CircularProgress} from '@material-ui/core';
import Input from '../../components/Input';
import Dropzone from '../../components/DropZone';

import {downloadData} from './actions/formActions';

import s from './styles/form.module.less';
import {connect} from 'react-redux';
import {TypeOfConnect} from '../../typings';
import {AppState} from '../../store';

const mapStateToProps = ({form: {isLoading}}: AppState) => ({isLoading});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({downloadData}, dispatch);

const enhanceStore = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type FormProps = TypeOfConnect<typeof enhanceStore>;

const Form = ({isLoading, downloadData}: FormProps) => {
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
        <Grid item xs={12}>
            <form style={{position: 'relative'}}>
                <Grid container justify="center">
                    <h2 className={s.header}>Форма для загрузки зашифрованных данных</h2>
                </Grid>
                <Grid direction="column" container>
                    <Input disabled={isLoading} label="Название файла" value={fileName} onChange={onChangeInput} />
                    <Dropzone disabled={isLoading} onDropFile={onDrop} />
                </Grid>
                <Grid container justify="center">
                    <Button disabled={isLoading} onClick={submitForm} style={{fontSize: '3rem'}}>
                        Загрузить
                    </Button>
                </Grid>

                {isLoading && <CircularProgress size={100} className={s.spinner} />}
            </form>
        </Grid>
    );
};

export default enhanceStore(Form);
