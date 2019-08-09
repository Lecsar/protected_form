import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Grid} from '@material-ui/core';
import {ControlInput} from 'components';
import {ENTER_KEY_CODE} from 'const';

interface PasswordInputProps {
    value: string;
    setValue: (value: string) => void;
}

export const PasswordInput = ({value, setValue}: PasswordInputProps) => {
    const onChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => setValue(value);

    const onEnterKeyDown = ({keyCode}: KeyboardEvent) => {
        switch (keyCode) {
            case ENTER_KEY_CODE:
                setValue('');
                break;
            default:
                return;
        }
    };

    return (
        <Grid item>
            <ControlInput
                placeholder="Enter password..."
                type="password"
                value={value}
                onChange={onChange}
                onKeyDown={onEnterKeyDown}
            />
        </Grid>
    );
};
