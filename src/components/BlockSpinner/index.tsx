import React from 'react';
import useStyles from './styles';
import {Grid, CircularProgress} from '@material-ui/core';

const BlockSpinner = () => {
    const s = useStyles();

    return (
        <Grid container className={s.block} justify="center" alignItems="center">
            {/* <h2>Подключение к чату...</h2> */}
            <CircularProgress size={100} />
        </Grid>
    );
};

export default BlockSpinner;
