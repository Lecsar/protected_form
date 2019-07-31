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
    authToken?: string;
}

interface User {
    login: string;
    password: string;
    token: string;
    role: Roles;
}

export interface AuthResponse {
    error: false | Error;
    login: string | null;
    token: string | null;
    role: Roles | null;
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

const checkAuth = async ({authToken, login, password}: AuthData): Promise<AuthResponse> => {
    const lambdaForSearch = authToken ? tokenSearchLambda(authToken) : loginSearchLambda(login, password);
    const findedUser = data.find(lambdaForSearch);

    if (findedUser) {
        const {password, ...userData} = findedUser;

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
        login: null,
        token: null,
        role: null,
    };
};

export default checkAuth;
