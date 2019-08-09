import {makeStyles, createStyles} from '@material-ui/core';

export const useInputStyles = makeStyles(
    createStyles({
        inputWrapper: {},

        label: {
            color: '#212121',
            fontSize: '1.7rem',
        },

        inputBlock: {
            width: '100%',
            height: 50,
        },

        input: {
            fontSize: '2rem',
        },
    }),
);
