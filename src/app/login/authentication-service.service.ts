import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor( private httpClient: HttpClient ) { }

  login(email: string, password: string): any {
    return this.httpClient.post<any>('http://localhost:3000/login', { email: email, password: password });
  }

}
