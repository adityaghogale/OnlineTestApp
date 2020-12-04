import { Component, OnInit } from '@angular/core';
import { marks } from '../models/marks.model';
import { test } from '../models/test.model';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-assign-test',
  templateUrl: './assign-test.component.html',
  styleUrls: ['./assign-test.component.css']
})
export class AssignTestComponent implements OnInit {
  te : test[];
  testIdInteger:number;
  uId:number;
  mark:marks=new marks();

  constructor(private service : TestServiceService) { }

  ngOnInit() {
    this.testIdInteger=this.service.testIdInteger;
    // this.service.fetchByCustId(this.testIdInteger).subscribe(data => {this.te=data})
    //this.service.fetchById(this.testIdInteger).subscribe(data => {this.te=data})
    this.service.fetchAll().subscribe(data => {this.te=data})
    console.log(this.te)
    
  }

  assign(testIdInteger:number){

    this.mark.testId=testIdInteger;
    this.mark.userId=this.uId;
    this.service.assignTest(this.mark).subscribe(data => {this.mark=data});
    console.log(this.mark)
  }

}
