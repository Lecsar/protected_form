import React from 'react';
import {Grid} from '@material-ui/core';
import {FileData} from 'views/Form/typings';
import {ListItem} from 'components';
import {IconType, Icon} from 'components/Icon/Icon';

interface FileProps extends Omit<FileData, '_id'> {}

export const File = ({name, error = false, isLoading = false}: FileProps) => {
    const getStatusIcon = (error: boolean, isLoading: boolean): IconType => {
        if (isLoading) {
            return IconType.spinner;
        }

        if (error) {
            return IconType.error;
        }

        return IconType.check;
    };

    return (
        <Grid container alignItems='center'>
            <Grid item>
                <ListItem label={name} />
            </Grid>
            <Grid item component="span">
                <Icon type={getStatusIcon(error, isLoading)} />
            </Grid>
        </Grid>
    );
};
