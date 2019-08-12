import React, {useCallback} from 'react';
import cn from 'classnames';
import {useDropzone} from 'react-dropzone';
import {FormLabel, Grid} from '@material-ui/core';
import {noop} from 'lodash';
import {useDropzoneStyles} from './DropzoneStyles';

interface DropzoneProps {
    label?: string;
    placeholder?: string;
    error?: boolean | string;
    disabled: boolean;
    onDropFile: (files: File[]) => void;
}

const DEFAULT_PLACEHOLDER = 'Перетащите или добавьте вручную файл';

export const Dropzone = ({
    label = '',
    placeholder = DEFAULT_PLACEHOLDER,
    error = false,
    disabled = false,
    onDropFile = noop,
    ...otherProps
}: DropzoneProps) => {
    const s = useDropzoneStyles();

    const onDrop = useCallback(
        acceptedFiles => {
            onDropFile(acceptedFiles);
        },
        [onDropFile],
    );
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, disabled});

    return (
        <Grid>
            <FormLabel className={s.label}>{label}</FormLabel>
            <Grid
                className={cn(s.dropzone, {[s.dropzoneActive]: isDragActive, [s.dropzoneDisabled]: disabled})}
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                <Grid component="p" className={s.placeholder}>
                    {isDragActive ? 'Поместите файл в выделенную область' : placeholder}
                </Grid>
            </Grid>
            {error && <FormLabel className={s.label}>{error}</FormLabel>}
        </Grid>
    );
};
