import {FormReducer} from 'reducers/formReducer';
import {ExtendedFieldData} from '../typings';

export const setFieldsState = (formState: FormReducer) =>
    formState.tabs
        .find(({tab: {_id}}) => formState.activeTabId === _id)!
        .fields.reduce(
            (acc, {shouldRender, shouldDisabled, ...field}) => {
                if (!shouldRender || shouldRender(formState)) {
                    return [...acc, {...field, disabled: Boolean(shouldDisabled && shouldDisabled(formState))}];
                }

                return acc;
            },
            [] as Omit<ExtendedFieldData, 'shouldRender' | 'shouldDisabled'>[],
        );
