import {User, Roles, ErrorMessage, AuthData, AuthResponse} from '../typings';
// import jwt from 'jsonwebtoken';

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
        error: ErrorMessage.INVALID,
        login: null,
        token: null,
        role: null,
    };
};

export default checkAuth;
