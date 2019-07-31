export enum Roles {
    USER = 'USER',
    ADMIN = 'ADMIN',
}

export enum ErrorMessage {
    INVALID = 'Invalid login or password',
}

export interface AuthData {
    password?: string;
    login?: string;
    authToken?: string;
}

export interface User {
    login: string;
    password: string;
    token: string;
    role: Roles;
}

export interface AuthResponse {
    error: false | ErrorMessage;
    login: string | null;
    token: string | null;
    role: Roles | null;
}
