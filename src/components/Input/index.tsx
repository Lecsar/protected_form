import React, {useRef, useEffect} from 'react';
import Input, {InputProps} from '@material-ui/core/Input';
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

const BaseInput = ({label, ...props}: InputProps & {label?: string}) => {
    const {inputBlock, controlLabel, labelPlacementStart, ...classes} = useStyles();

    const input = <Input className={inputBlock} classes={classes} {...props} />;

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

export default BaseInput;
