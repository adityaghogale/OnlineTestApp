import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { question } from '../models/question.model';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-que-display',
  templateUrl: './que-display.component.html',
  styleUrls: ['./que-display.component.css']
})
export class QueDisplayComponent implements OnInit {

  @Input() init:number=1;//minutes
  public counter : number = 0;

  @Input() init1:number = 60;//seconds
  public counter1 : number = 0;

  queList:any=[];
  que:question[];
  id: number;
  private sub: any;
  constructor(private service:TestServiceService ,private router:Router) { }

  ngOnInit() {
    this.onLoadPage();
    this.startCountdown1(); 
    this.startCountdown();
   
  }

  onLoadPage(){
    let tmpId:number=parseInt(sessionStorage.getItem("tmpTestId"));
//  this.service.getQuestions(tmpId).subscribe(data => {this.queList.push(data)
// console.log(data);});
// console.log(this.queList);
//   }

this.service.getQuestions(tmpId).subscribe(data => this.que=data);


  // submitTest(){
  //   console.log(this.queList);
  // }


}

setradio(e: string): void   
{  //first:queId second:option
      var e1=e;
      sessionStorage.setItem("e1",e1.toString());
      console.log(e)
        
}  

SaveAns(questionId:number){
  var questionId1=questionId;
  sessionStorage.setItem("questionId1",questionId1.toString());
  console.log(questionId)

  this.StoreAns()

}

StoreAns(){
  let tmpId2:number=parseInt(sessionStorage.getItem("questionId1"));//queId
  let tmpId3:number=parseInt(sessionStorage.getItem("e1"));//option

  this.service.storeAns(tmpId2,tmpId3).subscribe(data5 => console.log(data5))


}

CalculateResult(){
  //first:testId second:userId
  let tmpId5:number=parseInt(sessionStorage.getItem("tmpTestId"));//testId
 let u:number=parseInt(sessionStorage.getItem("userId"));//userId

 this.service.CalculateResult(tmpId5,u).subscribe(data5 => console.log("Marks Scored:"+data5.marksScored));
  this.router.navigate(['/end']);
}





startCountdown(){
  if(this.init && this.init>0){
    this.counter = this.init;
    this.doCountdown();
  }
}

doCountdown(){
  setTimeout(()=>{
    this.counter = this.counter -1;
    this.processCountdown();
  },60000);
}

processCountdown(){
  console.log("count is",this.counter);

  if(this.counter == 0){
    console.log("--counter end--")
    this.router.navigate(['/end'])
  }
  else{
    this.doCountdown();
  }
}







startCountdown1(){
  if(this.init1 && this.init1>0){
    this.counter1 = this.init1;
    this.doCountdown1();
  }
}

doCountdown1(){
  setTimeout(()=>{
    this.counter1 = this.counter1 -1;
    this.processCountdown1();
  },1000);
}

processCountdown1(){
  console.log("count is",this.counter1);

  if(this.counter1 == 0){
    this.startCountdown1();
  }
  else{
    this.doCountdown1();
  }
}

}
