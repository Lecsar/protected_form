import React, {useCallback} from 'react';
import {noop} from 'lodash';
import {List as ListBase} from '@material-ui/core';
import {ListItem} from '..';
// import {useListStyles} from './ListStyles';

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
    const onOptClick = useCallback((option: T) => (e: React.MouseEvent<any>) => onOptionClick(option, e), [
        onOptionClick,
    ]);
    // const s = useListStyles();

    return (
        <ListBase>
            {options.map(option => (
                <ListItem
                    key={getOptionKey(option)}
                    label={getOptionLabel(option)}
                    onClick={onOptClick(option)}
                    hasCheckbox={hasCheckbox}
                    isButton={isButton}
                />
            ))}
        </ListBase>
    );
};
