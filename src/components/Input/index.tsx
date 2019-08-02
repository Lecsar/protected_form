import React from 'react';
import Input, {InputProps} from 'react-toolbox/lib/input';
import {shouldUpdate} from 'recompose';

import styles from './input.module.less';

const {input, ...theme} = styles;

const StyledInput = (props: InputProps) => <Input className={input} {...props} theme={{...theme}} />;

const checkPropsChange = (props: InputProps, nextProps: InputProps) => nextProps.value !== props.value;

export default shouldUpdate(checkPropsChange)(StyledInput);
