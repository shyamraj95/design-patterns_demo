export interface LoginResponse {
    user: User;
    type: string;
    session: Session;
    status: string;
}

export interface Profile {
    login: string;
    firstName: string;
    lastName: string;
    locale: string;
    timeZone: string;
}

export interface User {
    id: string;
    passwordChanged: Date;
    profile: Profile;
}

export interface Session {
    token: string;
}


