import {DOWNLOAD_DATA_REQUEST} from '../containers/Form/const';

interface FormState {
    isLoading: boolean;
    error: boolean | string;
}

const initialState: FormState = {
    isLoading: false,
    error: false,
};

export default (state = initialState, action: any): FormState => {
    switch (action.type) {
        case DOWNLOAD_DATA_REQUEST:
            return {...state, isLoading: true};

        default:
            return state;
    }
};
