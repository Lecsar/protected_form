import {Dispatch} from 'react';
import {API_ADRESS} from '../../../const';
import {DOWNLOAD_DATA_REQUEST} from '../const';
import {encryptRSA, getEnctyptedFile} from './crypto';

const getKey = (): Promise<any> =>
    fetch(`${API_ADRESS}/getKey`)
        .then(res => res.json())
        .catch(err => {
            console.error('Ошибка при получении публичного ключа');
            return Promise.reject(err);
        });

export const downloadData = (fileName: string, file: Blob | null) => (dispatch: Dispatch<any>) => {
    dispatch({
        type: DOWNLOAD_DATA_REQUEST,
    });

    getKey()
        .then(({key}) => {
            const formData = new FormData();

            const cryptoFileName = encryptRSA(fileName, key);
            formData.append('fileName', cryptoFileName);

            if (file) {
                formData.append('file', file);
            }

            return fetch(`${API_ADRESS}/secret`, {
                method: 'post',
                body: formData,
            });
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error('Ошибка при отправке данных');
            return new Error(err);
        });
};
