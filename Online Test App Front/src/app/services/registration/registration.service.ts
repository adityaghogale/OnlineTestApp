import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry,catchError } from "rxjs/operators";
import { User } from 'src/app/entity/User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  registrationUrl="http://localhost:1111/register"
  constructor(private http:HttpClient) { }

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  //This method send new training program object to backend to store in data base
  registerUser(tmpUser:User){
    console.log("in service of TP to add");
    return this.http.post<User>(this.registrationUrl,tmpUser).pipe(retry(1),catchError(this.errorHandl));
  }

  //If error arrives during communication with backend this method will display message.
errorHandl(error){
  console.log("Error in service of registration");
  console.log(error.error.message);
  return throwError(error.error.message);
  }
}
