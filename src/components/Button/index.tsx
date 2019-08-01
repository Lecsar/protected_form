import React from 'react';
import {Button, ButtonProps} from 'react-toolbox/lib/button';

import styles from './button.module.less';

export default (props: ButtonProps) => <Button className={styles.button} {...props} />