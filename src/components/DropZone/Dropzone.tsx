import React from 'react';
import cn from 'classnames';
import {useDropzone} from 'react-dropzone';
import {FormLabel, Grid} from '@material-ui/core';
import {List} from 'components';
import {noop} from 'lodash';
import {useDropzoneStyles} from './DropzoneStyles';
import {withLoad} from 'HOC';
import {FileData} from 'views/Form/typings';
// import { withLoad } from 'HOC';

export interface DropzoneProps {
    id?: string;
    value?: FileData[];
    label?: string;
    placeholder?: string;
    error?: boolean | string;
    disabled?: boolean;
    onDrop?: (files: File[]) => void;
}

const DEFAULT_PLACEHOLDER = 'Перетащите или добавьте вручную файл';

export const Dropzone = ({
    value = [],
    label = '',
    placeholder = DEFAULT_PLACEHOLDER,
    error = false,
    disabled = false,
    onDrop = noop,
    ...otherProps
}: DropzoneProps) => {
    const s = useDropzoneStyles();
    const hasFiles = value && value.length > 0;
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, disabled, noClick: hasFiles});


    return (
        <Grid>
            <FormLabel className={s.label}>{label}</FormLabel>
            <Grid
                className={cn(s.dropzone, {[s.dropzoneActive]: isDragActive, [s.dropzoneDisabled]: disabled})}
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                {hasFiles ? (
                    <List<FileData> options={value} />
                ) : (
                    <Grid component="p" className={s.placeholder}>
                        {isDragActive ? 'Поместите файл в выделенную область' : placeholder}
                    </Grid>
                )}
            </Grid>
            {error && <FormLabel className={s.label}>{error}</FormLabel>}
        </Grid>
    );
};

export const DropzoneWithLoad = withLoad(Dropzone);
