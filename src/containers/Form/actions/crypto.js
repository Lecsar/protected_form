import JSEncrypt from 'jsencrypt/bin/jsencrypt';
import CryptoJS from 'crypto-js';

const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAzfUn6mKIWLUTheNLO/zO
hQBHHOoa3E7oFZ8Y3WCKf/v0qcsUAXN5ymXUXvYZ3gSogCFwd34i/EHawRN40mwf
9YPUt/VMUOB+SiTtw/Fdsy6kjrvJWNjx/PxlfEUH6MLJYYt50NTA/VbW30S8uTrY
PrM6E9Au6/RgDYtEILQSNR0QLMDp533zXWRGh0TN4PWIITBMxpkLwOKKQ5JF7LVO
qJ9PkZW/Mf41UDdQUoO0o62OSnBHArgjvwARiKa30NVgzMw0a60G2dgyFA/2RIk5
8NHM19n6Ms+YsrBPKafiwFfd2LtIqibh6ozevQ6fS9IJNUMcG3Egi8AaDhDZl/m5
DQvWPdN4lHrQaOUpqT4F9Of2Ak3VdDbfYvMDyfl79Nr9MhCweG9ytI73bgV/8833
TEgI8z+/3mLocOgKaX6rCcZyPe3gsGKTnZbUm2T877JKj4bSk8DrNi5+Qj3IdmSd
98sDCc8FOMXR5TEddd0R1ASJvmno4CFRz78+COG/IETo84AT58coDyaai6ngrfIh
MFDVskR+cx5QXy2CgrtPLUUAqxDNXvVeqL4NSg5KWxv+VqO38U+xAQ8mQ5K9YXuU
Bzkyxxn2fA9aLIzyyeAn/hPkR+bVEnAFxMfGvonD1LAjDp79DPiojqMqqdr3Er6/
EYsqXN6fUmHkzVlfv4X6990CAwEAAQ==
-----END PUBLIC KEY-----`;

export const encryptRSA = (value, publicKey) => {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);

    return encrypt.encrypt(value);
}

export const getEnctyptedFile = file => new Promise((resolve, reject) => {
    var reader = new FileReader();

    reader.readAsText(file);

    reader.onload = (e) => {
        console.log('Loading...');
    }

    reader.onloadend = ({ target: { result } }) => {
        console.log('Loading end');
        const encryptedKey = encryptRSA('I love JS', PUBLIC_KEY);
        const encryptedFile = CryptoJS.AES.encrypt(result, encryptedKey).toString();
        resolve({ encryptedFile, encryptedKey });
    }

    reader.onerror = () => {
        console.error(reader.error);
        reject(reader.error)
    };
})

// export const getEnctyptedFile = file => {


    // reader.onload = function (e) {

    //     // Используем библиотеку CryptoJS и шифр AES, чтобы 
    //     // зашифровать содержимое файла, который содержится в
    //     //  e.target.result, с паролем

    //     var encrypted = CryptoJS.AES.encrypt(e.target.result, password);

    //     // Скачиваем атрибут, который по ссылке вызывает контент,
    //     // при  нажатии на ссылку происходит загрузка содержимого.
    //     // Он также содержит имя файла, который предлагается
    //     // скачать.

    //     a.attr('href', 'data:application/octet-stream,' + encrypted);
    //     a.attr('download', file.name + '.encrypted');

    //     step(4);
    // };

    // Данный фрагмент кодирует содержимое файла в data-uri.
    // Это запускает обработку загруженного файла, с результатом 

    // reader.readAsDataURL(file);
// }