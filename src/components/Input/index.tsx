import React from 'react';
import Input, {InputProps} from 'react-toolbox/lib/input';

import styles from './input.module.less';

const {input, ...theme} = styles;

export default (props: InputProps) => <Input className={input} {...props} theme={{...theme}} />;
