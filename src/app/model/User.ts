import { Telephone } from './telephone';
import { Occupation } from './Occupation';

export class User{
    id: Number;
    login: String;
    name: String;
    surname: String;
    birth: String;
    pass: String;
    phones: Array<Telephone>;
    occupation : Occupation = new Occupation(); 
    salary: DoubleRange;
}