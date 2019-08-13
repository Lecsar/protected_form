import React, {useCallback} from 'react';
import {noop} from 'lodash';
import {useListStyles} from './ListStyles';
import {ListItem, ListItemIcon, Checkbox, ListItemText, List as ListBase} from '@material-ui/core';

interface ListProps<T> {
    options: T[];
    isButton?: boolean;
    hasCheckbox?: boolean;
    onOptionClick?: (o: T, event: React.MouseEvent<any>) => void;
    getOptionKey?: (o: T) => string;
    getOptionLabel?: (o: T) => string;
}

export const List = <T extends {}>({
    options = [],
    hasCheckbox = false,
    isButton = false,
    onOptionClick = noop,
    getOptionKey = (o: any) => o._id,
    getOptionLabel = (o: any) => o.name,
}: ListProps<T>) => {
    const onOptClick = useCallback((option: T) => (e: React.MouseEvent<any>) => onOptionClick(option, e), [onOptionClick]);
    const s = useListStyles();

    return (
        <ListBase>
            {options.map(option => {
                const id = getOptionKey(option);
                const label = getOptionLabel(option);
                const labelId = `checkbox-list-label-${label}`;

                return (
                    <ListItem key={id} dense button={isButton as any} onClick={onOptClick(option)}>
                        {hasCheckbox && (
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
                        )}
                        <ListItemText className={s.text} classes={{primary: s.primary}} id={labelId} primary={label} />
                    </ListItem>
                );
            })}
        </ListBase>
    );
};
