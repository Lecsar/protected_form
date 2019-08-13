import React, {useCallback} from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {noop} from 'lodash';
import {loadFiles} from 'views/Form/actions';
import {FileTemplate} from 'views/Form/typings';
import {TypeOfConnect} from 'typings';
import {DropzoneProps} from 'components';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({loadFiles}, dispatch);

const enhanceStore = connect(
    null,
    mapDispatchToProps,
);

type WrappedComponentType = (props: DropzoneProps) => JSX.Element | null;

type FormComponentProps = TypeOfConnect<typeof enhanceStore> &
    FileTemplate & {WrappedComponent: WrappedComponentType} & DropzoneProps;

const FormComponent = ({
    WrappedComponent,
    id,
    loadFiles,
    validationRule,
    onDrop = noop,
    ...props
}: FormComponentProps) => {
    const onDropFiles = useCallback(
        (acceptedFiles: File[]) => {
            loadFiles(id, acceptedFiles);
            onDrop(acceptedFiles);
        },
        [id, loadFiles, onDrop],
    );

    return <WrappedComponent id={id} {...props} onDrop={onDropFiles} />;
};

const FormComponentWithStore = enhanceStore(FormComponent);

export const withLoad = (WrappedComponent: WrappedComponentType) => (props: FileTemplate) => (
    <FormComponentWithStore WrappedComponent={WrappedComponent} {...props} />
);
