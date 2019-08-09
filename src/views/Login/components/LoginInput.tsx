import React, {useRef, useEffect, ChangeEvent} from 'react';
import {Grid} from '@material-ui/core';
import {ControlInput} from 'components';
// import {ENTER_KEY_CODE} from 'const';

interface LoginInputProps {
    value: string;
    setValue: (value: string) => void;
}

export const LoginInput = ({value, setValue}: LoginInputProps) => {
    const loginRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (loginRef && loginRef.current) {
            loginRef.current.focus();
        }
    }, []);

    const onChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => setValue(value);

    // const onEnterKeyDown = ({keyCode}: KeyboardEvent) => {
    //     switch (keyCode) {
    //         case ENTER_KEY_CODE:
    //             setValue('');
    //             break;
    //         default:
    //             return;
    //     }
    // };

    return (
        <Grid item>
            <ControlInput placeholder="Enter login..." type="text" inputRef={loginRef} value={value} onChange={onChange} />
        </Grid>
    );
};
