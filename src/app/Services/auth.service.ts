import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../Model/User"
import {Logindata} from "../../Model/Logindata";

@Injectable({
  providedIn: 'root'
})
export class User_serviceService {

  constructor(private _http: HttpClient) {
  }

  // GET  all user table
  getUser(id:string): Observable<User> {
    return this._http.get<User>(`http://localhost:3000/api/${id}/user`);
  }

  // POST send data to backend for registration
  sendUser(data): Observable<User> {
    return this._http.post<User>("http://localhost:3000/api/user/auth/signup",data)
  }

  // POST retrive the token from login
  loginUser(data){
    return this._http.post<Logindata>('http://localhost:3000/api/user/auth/login',data)
  }

  IsloggedIn():boolean {
    let getsessionstorage = JSON.parse(localStorage.getItem("data"));
  console.log(getsessionstorage)
    if(getsessionstorage != null){
        return true
    }else {
      return false
    }
  }
}

