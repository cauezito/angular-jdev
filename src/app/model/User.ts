import { Telephone } from './telephone';

export class User{
    id: Number;
    login: String;
    name: String;
    surname: String;
    birth: String;
    pass: String;
    phones: Array<Telephone>;
}