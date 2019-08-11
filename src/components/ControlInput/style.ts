import {makeStyles, createStyles} from '@material-ui/core';

export const useInputStyles = makeStyles(
    createStyles({
        inputWrapper: {},

        label: {
            color: '#212121',
            fontSize: '1.7rem',
        },

        errorMessage: {
            color: '#c62828',
            fontSize: '1.5rem',
        },

        inputBlock: {
            width: '100%',
            minHeight: 50,
        },

        input: {
            fontSize: '2rem',
        },
    }),
);
