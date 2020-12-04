import { Component, OnInit } from '@angular/core';
import { test } from '../models/test.model';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-test-fun',
  templateUrl: './test-fun.component.html',
  styleUrls: ['./test-fun.component.css']
})
export class TestFunComponent implements OnInit {

  te : test[];
  testIdInteger:number;


  constructor(private service : TestServiceService) { }

  ngOnInit() {

     this.testIdInteger=this.service.testIdInteger;
    // this.service.fetchByCustId(this.testIdInteger).subscribe(data => {this.te=data})
    //this.service.fetchById(this.testIdInteger).subscribe(data => {this.te=data})
    this.service.fetchAll().subscribe(data => {this.te=data})
    console.log(this.te)
    
  }


  remove(testIdInteger: number){
    this.service.deleteTest(testIdInteger);
    console.log(testIdInteger)
  }

  fetchById(testIdInteger:number){
    this.service.fetchById(testIdInteger).subscribe(response=>{
      this.te = response;
    })
  }

}
