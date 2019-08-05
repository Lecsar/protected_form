import React from 'react';
// import {Button, ButtonProps} from 'react-toolbox/lib/button';
import {shouldUpdate} from 'recompose';

import styles from './button.module.less';

// const StyledButton = (props: ButtonProps) => <Button className={styles.button} {...props} />;

// const checkPropsChange = (props: ButtonProps, nextProps: ButtonProps) => nextProps.disabled !== props.disabled;

// export default shouldUpdate(checkPropsChange)(StyledButton);

export default () => false;
