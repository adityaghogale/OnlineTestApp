import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { marks } from '../models/marks.model';
import { question } from '../models/question.model';
import { test } from '../models/test.model';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  que:question[]=[];
  mar:marks[];
  test1:test[]=[];
  test2:test;
  uId:number;
  tId:number[];
  userName:string;

 data: any[] = [];
   testIds: any[] = [];

  

  constructor(private service:TestServiceService,private router:Router) {

  
    
   }

  ngOnInit() {
    this.loadMark();
    this.userName=sessionStorage.getItem("user");
    //console.log(this.mar)
    

  }
    loadMark(){
      this.uId=parseInt(sessionStorage.getItem("userId"));
    console.log(sessionStorage.getItem("userId"));
    console.log(this.uId)
    this.service.getTest(this.uId).subscribe(
      data=>{
      //console.log(data)
      this.mar=data;
      
     // console.log(this.mar.map(item => item.testId));
     this.mar.map(item => this.service.getTest1(item.testId)
     .subscribe(data1 =>{this.test1.push(data1[0]) 
      console.log(this.test1)
       }));
       

      //  this.mar.map(item => this.service.getTest1(item.testId)
      //  .subscribe(data1 =>{this.test1=data1 
      //   this.test1.map( item1 => (this.test1))  
      //    console.log(item1)  }));
     
     
     // console.log()
      //  data.filter(d=>d.testId)

     
// data.forEach(d => {
//   this.testIds.push(d.testId);
//  console.log(data.filter(d=>d.testId)) 
// });
     
      
      //this.service.getQuestions(this.mar.testId).subscribe(data => {this.que=data})
      }
      
      );
      
     

      
    //console.log(this.tId);
    }

GiveTest(Id:number){
  sessionStorage.setItem("tmpTestId",Id.toString());
  this.router.navigate(['/queDisplay'])
}


  getTest(){

  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
