import React, {useCallback} from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {noop} from 'lodash';
import {setFieldValue, validateField} from 'views/Form/actions';
import {ExtendedFieldData} from 'views/Form/typings';
import {TypeOfConnect} from 'typings';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({setFieldValue, validateField}, dispatch);

const enhanceStore = connect(
    null,
    mapDispatchToProps,
);

type WrappedComponentType = (props: ExtendedFieldData) => JSX.Element | null;

type FormComponentProps = TypeOfConnect<typeof enhanceStore> &
    ExtendedFieldData & {WrappedComponent: WrappedComponentType};

const FormComponent = ({
    WrappedComponent,
    _id,
    validationRule,
    onChange = noop,
    onBlur = noop,
    setFieldValue,
    validateField,
    ...props
}: FormComponentProps) => {
    const onChangeWithSetValue = useCallback(
        (e: React.ChangeEvent<any>) => {
            setFieldValue(_id, e.target.value);

            onChange(e);
        },
        [_id, onChange, setFieldValue],
    );

    const onBlurWithValidate = useCallback(
        (e: React.SyntheticEvent) => {
            if (validationRule) {
                validateField(_id);
            }

            onBlur(e);
        },
        [_id, validationRule, onBlur, validateField],
    );

    return <WrappedComponent _id={_id} {...props} onChange={onChangeWithSetValue} onBlur={onBlurWithValidate} />;
};

const FormComponentWithStore = enhanceStore(FormComponent);

export const withForm = (WrappedComponent: WrappedComponentType) => (props: ExtendedFieldData) => (
    <FormComponentWithStore WrappedComponent={WrappedComponent} {...props} />
);
