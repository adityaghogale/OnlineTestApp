import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { throwError } from 'rxjs';
import { test } from './models/test.model';
import { Observable, throwError } from 'rxjs';
import { retry,catchError, tap } from "rxjs/operators";
import { map } from './models/map.model';
import { marks } from './models/marks.model';
import { question } from './models/question.model';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

 te:test;
 mark:marks[];
 m:map[]=[];
 m1:map[]=[];
 testIdInteger:number;

  constructor(public http: HttpClient) { }

  addTest(te: test){
    console.log("in service file")
    console.log(te)
    
    return this.http.post<test>('http://localhost:8020/c/addTest',te);
  }

  addQue(que:question){
    console.log("in service file")
    
    console.log(que.questionTitle)
    return this.http.post<question>('http://localhost:9090/addQuestion',que);
  }


  addMap(m: map){
    console.log("in service file")
    console.log(m)
    return this.http.post<map>('http://localhost:8020/c/addMap',m);
  }
  
  getTest(userId:number):Observable<marks[]>{
    console.log(userId)
    return this.http.get<marks[]>('http://localhost:8020/c/getUserTests/' + userId).pipe( 
      tap(data =>  
      console.log('All: ' + JSON.stringify(data))) 
    ); ;
  }

  getTest1(testId:number):Observable<test[]>{
   
    return this.http.get<test[]>('http://localhost:8020/c/getTest2/' + testId).pipe( 
      tap(data =>  
      console.log('All: ' + JSON.stringify(data))) 
    ); ;
  }

  getQuestions(testId:number):Observable<question[]>{
    console.log(testId)
    return this.http.get<question[]>('http://localhost:8020/c/' + testId).pipe( 
      tap(data =>  
      console.log('All: ' + JSON.stringify(data))) 
    );
  }

  getAllQuestions(){
    return this.http.get<question[]>('http://localhost:9090/getAll');
  }

  fetchById(testIdInteger: number){
    return this.http.get<test[]>('http://127.0.0.1:8020/c/get/' + testIdInteger);
  }

  fetchAll(){
    return this.http.get<test[]>('http://localhost:8020/c/all/' );
  }

  deleteTest(testIdInteger: number) {
    console.log("In service delete")
    console.log(testIdInteger)
     
    return this.http.delete('http://localhost:8020/c/Delete/'+ testIdInteger);
  }

  assignTest(mark: marks){
    console.log("in service")
    console.log(this.mark)
    return this.http.post<marks>('http://localhost:8020/c/assign' , mark);
  }


  storeAns(questionId:number,option:number){
   console.log(questionId)
   console.log(option)
    return this.http.get<question>('http://localhost:8050/a/setMarks/' + questionId +'/'+option).pipe( 
      tap(data =>  
      console.log('All: ' + JSON.stringify(data))) 
    );
  }

  CalculateResult(testId:number,userId:number){
    console.log(testId)
    console.log(userId)
     return this.http.get<marks>('http://localhost:8050/a/calculateMarks/' + testId +'/'+userId).pipe( 
       tap(data =>  
       console.log('All: ' + JSON.stringify(data))) 
     );
   }

  errorHandl(error){
    console.log("Error in feedback service");
    console.log(error.error.message);
    return throwError(error.error.message);
    }

}
