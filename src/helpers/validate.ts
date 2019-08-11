import produce from 'immer';
import {FormReducer} from 'reducers/form';
import {ValidationType} from 'views/Form/typings';
import {isNumber} from 'util';

export const validate = (state: FormReducer, fieldId: string) =>
    produce(state, ({activeTabId, blocks}) => {
        const {fields} = blocks.find(({block: {id}}) => activeTabId === id)!;
        const currentField = fields.find(({id}) => fieldId === id)!;

        if (currentField.validationRule) {
            const {value, validationRule} = currentField;

            if (validationRule.required && !value) {
                currentField.error = true;
                currentField.errorMessage = 'Это поле обязательно для заполнения';
                return;
            }

            switch (validationRule.type) {
                case ValidationType.number:
                    if (+value !== +value) {
                        currentField.error = true;
                        currentField.errorMessage = 'Значение должно быть числом';
                        return;
                    }
                    break;
            }

            currentField.error = false;
            currentField.errorMessage = '';
        }
    });
