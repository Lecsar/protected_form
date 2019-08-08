import {makeStyles, createStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);

export default useStyles;