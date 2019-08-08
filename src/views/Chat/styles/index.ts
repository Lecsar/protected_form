import {makeStyles} from '@material-ui/styles';

export default makeStyles({
    root: {
        flexGrow: 1,
        height: 1000,
    },

    header: {
        fontSize: '3rem',
        textAlign: 'center',
        margin: '1rem 0',
    },

    chat: {
        backgroundColor: '#f5f5f5',
        height: '70rem',
        overflow: 'auto',
    },
});
