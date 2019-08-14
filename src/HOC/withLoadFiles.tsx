import React, {useCallback} from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {noop} from 'lodash';
import {AppState} from 'store';
import {loadFiles} from 'views/Form/actions';
import {FileTemplate} from 'views/Form/typings';
import {TypeOfConnect} from 'typings';
import {DropzoneProps} from 'components';

const mapStateToProps = ({form: {templateId, activeTabId}}: AppState) => ({templateId, activeTabId});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({loadFiles}, dispatch);

const enhanceStore = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type WrappedComponentType = (props: DropzoneProps) => JSX.Element | null;

type FormComponentProps = TypeOfConnect<typeof enhanceStore> &
    FileTemplate & {WrappedComponent: WrappedComponentType} & DropzoneProps;

const FormComponent = ({
    WrappedComponent,
    _id,
    templateId,
    activeTabId,
    loadFiles,
    validationRule,
    onDrop = noop,
    ...props
}: FormComponentProps) => {
    const onDropFiles = useCallback(
        (acceptedFiles: File[]) => {
            loadFiles(templateId, activeTabId!, _id, acceptedFiles);
            onDrop(acceptedFiles);
        },
        [templateId, activeTabId, _id, loadFiles, onDrop],
    );

    return <WrappedComponent {...props} onDrop={onDropFiles} />;
};

const FormComponentWithStore = enhanceStore(FormComponent);

export const withLoad = (WrappedComponent: WrappedComponentType) => (props: FileTemplate) => (
    <FormComponentWithStore WrappedComponent={WrappedComponent} {...props} />
);
