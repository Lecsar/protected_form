import React from 'react';

import {useListStyles} from './ListStyles';
import {ListItem, ListItemIcon, Checkbox, ListItemText, List as ListBase} from '@material-ui/core';

interface ListProps<T> {
    options: T[];
    getOptionKey?: (o: T) => string;
    getOptionLabel?: (o: T) => string;
}

export const List = <T extends {}>({
    options = [],
    getOptionKey = (o: any) => o.id,
    getOptionLabel = (o: any) => o.name,
}: ListProps<T>) => {
    const s = useListStyles();

    return (
        <ListBase>
            {options.map(option => {
                const id = getOptionKey(option);
                const label = getOptionLabel(option);
                const labelId = `checkbox-list-label-${label}`;

                return (
                    <ListItem key={id} dense button={false}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                // classes={{root: }}
                                // checked={checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                // disableRipple
                                inputProps={{'aria-labelledby': labelId}}
                            />
                        </ListItemIcon>
                        <ListItemText className={s.text} classes={{primary: s.primary}} id={labelId} primary={label} />
                    </ListItem>
                );
            })}
        </ListBase>
    );
};
