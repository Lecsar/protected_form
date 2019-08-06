import React from 'react';
import Button, {ButtonProps} from '@material-ui/core/Button';
import useStyles from './styles';

const StyledButton = (props: ButtonProps) => {
    const styles = useStyles();

    return <Button classes={styles} variant='contained' {...props} />;
};

export default StyledButton;
