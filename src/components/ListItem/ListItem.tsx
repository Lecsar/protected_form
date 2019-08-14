import React from 'react';
import {noop} from 'lodash';
import {ListItem as ListItemBase, Checkbox, ListItemIcon, ListItemText} from '@material-ui/core';
import {useListItemStyles} from './ListItemStyles';

interface ListItemProps {
    label: string;
    isButton?: boolean;
    hasCheckbox?: boolean;
    onClick?: (e: any) => void;
}

export const ListItem = ({label, isButton = false, hasCheckbox = false, onClick= noop}: ListItemProps) => {
    const s = useListItemStyles();

    return (
        <ListItemBase dense button={isButton as any} onClick={onClick}>
            {hasCheckbox && (
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        // classes={{root: }}
                        // checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        // disableRipple
                        // inputProps={{'aria-labelledby': labelId}}
                    />
                </ListItemIcon>
            )}
            <ListItemText className={s.text} classes={{primary: s.primary}} primary={label} />
        </ListItemBase>
    );
};
