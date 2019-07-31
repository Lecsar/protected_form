// import jwt from 'jsonwebtoken';

export enum Roles {
    USER = 'USER',
    ADMIN = 'ADMIN',
}

export enum Error {
    INVALID = 'Invalid login or password',
}

interface AuthData {
    password?: string;
    login?: string;
    token?: string;
}

interface User {
    login: string;
    password: string;
    token: string;
    role: Roles;
}

export interface UserData {
    error: false;
    token: string;
    role: Roles;
}

const data: User[] = [
    {
        login: '1',
        password: '1',
        token: 'dsaglkhgdsa126378dajb',
        role: Roles.USER,
    },
];

// const PRIVATE_KEY = 'dsaglkhgdsa126378dajb';

const tokenSearchLambda = (token: string) => (u: User) => u.token === token;
const loginSearchLambda = (login?: string, password?: string) => (user: User) =>
    user.login === login && user.password === password;

const checkAuth = ({token, login, password}: AuthData): UserData | {error: Error} => {
    const lambdaForSearch = token ? tokenSearchLambda(token) : loginSearchLambda(login, password);
    const findedUser = data.find(lambdaForSearch);

    if (findedUser) {
        const {password, login, ...userData} = findedUser;

        // if (!findedUser.token) {
        // const token = jwt.sign(findedUser, PRIVATE_KEY);
        // findedUser.token = token;
        // }

        return {
            error: false,
            ...userData,
        };
    }

    return {
        error: Error.INVALID,
    };
};

export default checkAuth;
