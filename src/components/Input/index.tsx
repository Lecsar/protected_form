import React from 'react';
import Input, {InputProps} from '@material-ui/core/Input';
import {makeStyles, createStyles} from '@material-ui/styles';
import {FormControlLabel} from '@material-ui/core';

const useStyles = makeStyles(
    createStyles({
        inputBlock: {
            width: 300,
            height: 50,
        },

        input: {
            fontSize: '2rem',
        },

        controlLabel: {
            fontSize: '2rem',
            marginRight: 20,
        },
    }),
);

const BaseInput = ({label, ...props}: InputProps & {label: string}) => {
    const {inputBlock, controlLabel, ...classes} = useStyles();

    return (
        <FormControlLabel
            classes={{label: controlLabel}}
            label={label}
            labelPlacement="start"
            control={<Input className={inputBlock} classes={classes} {...props} />}
        />
    );
};

// const areEqual = (prevProps: InputProps, nextProps: InputProps) => prevProps.value === nextProps.value;

// export default memo(BaseInput, areEqual);

export default BaseInput;
