import {PersonDetails} from "@app/_models/task/person-details";

export class User {
    id: number;
    username: string;
    password: string;
    position: string;
    personDetails: PersonDetails;
    authdata?: string;
}
