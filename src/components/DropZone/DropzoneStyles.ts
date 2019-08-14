import {makeStyles} from '@material-ui/styles';

export const useDropzoneStyles = makeStyles({
    label: {
        color: '#212121',
        fontSize: '1.7rem',
    },

    dropzone: {
        width: '100%',
        minHeight: '30px',
        border: '4px dashed grey',
        margin: '20px 0',
        padding: '5px',
        fontSize: '30px',
        boxSizing: 'border-box',
        outline: 'none',
    },

    placeholder: {
        textAlign: 'center',
        fontSize: '2rem',
        color: 'rgba(0, 0, 0, 0.54)',
    },

    dropzoneActive: {
        borderColor: 'green',
    },

    dropzoneDisabled: {
        opacity: 0.6,
    },

    dropzoneCursor: {
        cursor: 'pointer',
    },
});
