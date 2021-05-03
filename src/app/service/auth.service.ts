import { UserLogin } from './../model/UserLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//HttpHeaders
import { User } from '../model/User';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment.prod';

@Injectable ({
  providedIn: 'root'
})
export class AuthService {
  constructor (private http: HttpClient) {}

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar' ,userLogin)
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar' , user)
  }
}