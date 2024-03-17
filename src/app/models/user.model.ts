export class User {
    _username: string;
    _password: string;
    _repeatPassword: string;
    _email: string;
    _phone: number;
    _gender: string;
    _country: string;
    _hobbies: Array<String>;
    _accept: boolean;

    constructor(username: string, password: string, repeatPassword: string, email: string, phone: number, gender: string, country: string, hobbies: Array<String>, accept: boolean) {
        this._username = username;
        this._password = password;
        this._repeatPassword = repeatPassword;
        this._email = email;
        this._phone = phone;
        this._gender = gender;
        this._country = country;
        this._hobbies = hobbies;
        this._accept = accept;
    }

    public get username(): string {
        return this._username;
    }

    public set username(value: string) {
        this._username = value;
    }

    public get repeatPassword(): string {
        return this._repeatPassword;
    }

    public set repeatPassword(value: string) {
        this._repeatPassword = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get phone(): number {
        return this._phone;
    }

    public set phone(value: number) {
        this._phone = value;
    }

    public get gender(): string {
        return this._gender;
    }

    public set gender(value: string) {
        this._gender = value;
    }

    public get country(): string {
        return this._country;
    }

    public set country(value: string) {
        this._country = value;
    }

    public get hobbies(): Array<String> {
        return this._hobbies;
    }

    public set hobbies(value: Array<String>) {
        this._hobbies = value;
    }

    public get accept(): boolean {
        return this._accept;
    }

    public set accept(value: boolean) {
        this._accept = value;
    }


}

