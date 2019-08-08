import React from 'react';
import useStyles from './style';
import {Grid, CircularProgress} from '@material-ui/core';

export const BlockSpinner = () => {
    const s = useStyles();

    return (
        <Grid container className={s.block} justify="center" alignItems="center">
            {/* <h2>Подключение к чату...</h2> */}
            <CircularProgress size={100} />
        </Grid>
    );
};
