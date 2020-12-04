import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  testResult:number;
  userName:string;
  constructor(private service:TestServiceService,private router:Router) { }

  ngOnInit() {
    this.userName=sessionStorage.getItem('user');
    this.CalculateResult();
  }

  CalculateResult(){
    //first:testId second:userId
    let tmpId5:number=parseInt(sessionStorage.getItem("tmpTestId"));//testId
   let u:number=parseInt(sessionStorage.getItem("userId"));//userId
  
   this.service.CalculateResult(tmpId5,u).subscribe(data5 => this.testResult=data5.marksScored);
  
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
