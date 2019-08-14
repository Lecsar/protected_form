import React from 'react';
import cn from 'classnames';
import {useIconStyles} from './IconStyle';
import {Check, Error} from '@material-ui/icons';
import {CircularProgress} from '@material-ui/core';

export enum IconType {
    check,
    spinner,
    error,
}

interface IconProps {
    type: IconType;
    iconClassName?: string;
}

export const Icon = ({iconClassName, type}: IconProps) => {
    const s = useIconStyles();

    switch (type) {
        case IconType.check:
            return <Check className={cn(s.icon, s.check, iconClassName)} />;
        case IconType.spinner:
            return <CircularProgress size={25} />;
        case IconType.error:
            return <Error className={cn(s.icon, s.error, iconClassName)} />;
        default:
            console.error('Неизвестный IconType');
            return null;
    }
};
