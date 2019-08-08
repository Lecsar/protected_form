import React from 'react';
import {Input as BaseInput} from '@material-ui/core';
import {InputProps} from '@material-ui/core/Input';
import {makeStyles, createStyles} from '@material-ui/styles';
import {FormControlLabel} from '@material-ui/core';

const useStyles = makeStyles(
    createStyles({
        inputBlock: {
            width: '100%',
            height: 50,
        },

        input: {
            fontSize: '2rem',
        },

        controlLabel: {
            fontSize: '2rem',
            textAlign: 'right',
            marginRight: '1rem',
            minWidth: 150,
        },

        labelPlacementStart: {
            margin: 0,
            padding: 0,
        },
    }),
);

export const Input = ({label, ...props}: InputProps & {label?: string}) => {
    const {inputBlock, controlLabel, labelPlacementStart, ...classes} = useStyles();

    const input = <BaseInput className={inputBlock} classes={classes} {...props} />;

    return label ? (
        <FormControlLabel
            classes={{label: controlLabel, labelPlacementStart} as any}
            label={label}
            labelPlacement="start"
            control={input}
        />
    ) : (
        input
    );
};

// const areEqual = (prevProps: InputProps, nextProps: InputProps) => prevProps.value === nextProps.value;

// export default memo(BaseInput, areEqual);
