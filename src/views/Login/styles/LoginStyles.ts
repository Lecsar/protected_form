import {makeStyles, createStyles} from '@material-ui/styles';

export const useLoginStyles = makeStyles(theme =>
    createStyles({
        root: {
            flexGrow: 1,
            height: '100vh',
        },
    }),
);
