// import {API_ADRESS} from 'const';
// import {urlMap} from './urlMap';

// type UrlMap = typeof urlMap;

// type Parameters<T> = T extends (... args: infer T) => any ? T : never;
// type T = keyof UrlMap

// type test = UrlMap[T];
// type params = Parameters<test>;

// class Api {
//     private apiAddress: string;
//     private urlMap: UrlMap;

//     constructor(apiAddress: string, urlMap: UrlMap) {
//         this.apiAddress = apiAddress;
//         this.urlMap = urlMap;
//     }

//     async send(url: T, ...args: Parameters<UrlMap[T]>) {
//          fetch(`${this.apiAddress}${this.urlMap[url]()}`)
//     }
// }

// export const api = new Api(API_ADRESS, urlMap);

// api.send('getTemplateData')

export const test = () => false;
