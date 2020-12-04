import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from 'src/app/entity/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //url to fetch login info. from backend
  loginUrl="http://localhost:1111/login/"
  constructor(private http:HttpClient) { }

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  findUserByUsername(tmpUsername:string,tmpPassword:string):Observable<any>{
    
    console.log("In service of find by username " +tmpUsername+" and password "+tmpPassword);
    
      return this.http.get('http://localhost:1111/login/'+tmpUsername+"/"+tmpPassword);
  }

  getAllUsers(){
    return this.http.get<User[]>('http://localhost:1111//getDetails');
  }
  errorHandl(error){
    console.log("Service of login");
    console.log(error.error.message);
    return throwError(error.error.message);
    
  }

  
}
