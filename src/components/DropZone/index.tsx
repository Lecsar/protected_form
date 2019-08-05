import React, {useCallback} from 'react';
import cn from 'classnames';
import {useDropzone} from 'react-dropzone';

import s from './styles/dropzone.module.less';

interface DropzoneProps {
    disabled: boolean;
    onDropFile: (files: File[]) => void;
}

const Dropzone = ({disabled, onDropFile}: DropzoneProps) => {
    const onDrop = useCallback(acceptedFiles => {
        onDropFile(acceptedFiles);
    }, [onDropFile]);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, disabled});

    return (
        <div
            className={cn(s.dropzone, {[s.dropzoneActive]: isDragActive, [s.dropzoneDisabled]: disabled})}
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
        </div>
    );
};

export default Dropzone;
