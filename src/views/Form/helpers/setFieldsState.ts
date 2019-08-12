import {FormReducer} from 'reducers/form';
import {ExtendedFieldData} from '../typings';

export const setFieldsState = (formState: FormReducer) =>
    formState.blocks
        .find(({tab: {id}}) => formState.activeTabId === id)!
        .fields.reduce(
            (acc, {shouldRender, shouldDisabled, ...field}) => {
                if (!shouldRender || shouldRender(formState)) {
                    return [...acc, {...field, disabled: Boolean(shouldDisabled && shouldDisabled(formState))}];
                }

                return acc;
            },
            [] as Omit<ExtendedFieldData, 'shouldRender' | 'shouldDisabled'>[],
        );
