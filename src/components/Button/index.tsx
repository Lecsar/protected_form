import React from 'react';
import {Button as BaseButton} from '@material-ui/core';
import {ButtonProps} from '@material-ui/core/Button';
import useStyles from './style';

export const Button = (props: ButtonProps) => {
    const styles = useStyles();

    return <BaseButton classes={styles} variant="contained" {...props} />;
};
