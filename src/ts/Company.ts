import {faker} from '@faker-js/faker';
import { Mappable } from './CustomMap';
export class Company implements Mappable{
    companyName:string;
    catchPhrase:string;
    location:{
        lat:number;
        lng:number;
    }
    constructor(){
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        }
    }
    markerContent():string{
        return `<h2>Company Name: ${this.companyName}</h2>
        <h2>Phrase: ${this.catchPhrase}</h2>`;
    }
}
