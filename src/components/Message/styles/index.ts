import {makeStyles} from '@material-ui/styles';

export default makeStyles({
    messageBlock: {
        margin: '5px 0',
        padding: '0 10px',
    },

    message: {
        borderRadius: '5px',
        boxShadow: '1px 1px 3px 0px rgba(0,0,0,0.6)',
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

    messageAuthor: {
        fontSize: '2rem',
    },

    messageText: {
        fontSize: '1.6rem',
        textAlign: 'justify',
    },
});
