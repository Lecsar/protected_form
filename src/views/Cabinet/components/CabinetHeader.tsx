import React from 'react';
import {AppBar, Toolbar, Typography, Grid} from '@material-ui/core';
import {useCabinetStyles} from '../styles/CabinetHeaderStyles';

export const CabinetHeader = () => {
    const s = useCabinetStyles();

    return (
        <AppBar className={s.appbar} position="static">
            <Grid container item xs={8}>
                <Toolbar className={s.toolbar}>
                    <Typography variant="h3">Личный кабинет</Typography>
                </Toolbar>
            </Grid>
        </AppBar>
    );
};
