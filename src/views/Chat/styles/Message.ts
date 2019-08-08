import {makeStyles} from '@material-ui/styles';

export const useStylesMessage = makeStyles({
    messageBlock: {
        margin: '5px 0',
        padding: '0 10px',
    },

    message: {
        borderRadius: '5px',
        boxShadow: '1px 1px 3px 0px rgba(0,0,0,0.6)',
        flexBasis: 'auto',
    },

    myMessage: {
        backgroundColor: '#e8f5e9',
    },

    otherMessage: {
        backgroundColor: 'white',
    },

    messageWrapper: {
        padding: 5,
    },

    headerWrapper: {
        position: 'relative',
    },

    messageAuthor: {
        whiteSpace: 'nowrap',
        fontSize: '2rem',
        marginRight: '2rem',
    },

    messageText: {
        fontSize: '1.6rem',
    },

    deleteIcon: {
        fontSize: '1.3rem',
        cursor: 'pointer',
        position: 'absolute',
        top: '-.7rem',
        right: '-.3rem',
    },

    loadingSpinner: {
        position: 'absolute',
        top: '-.5rem',
        left: '-2.5rem',
    },
});
