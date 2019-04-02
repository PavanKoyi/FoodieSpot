import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    constructor(private httpClient: HttpClient) { }

    login(): any {
        return this.httpClient.get('../../assets/user.json');
    }

}