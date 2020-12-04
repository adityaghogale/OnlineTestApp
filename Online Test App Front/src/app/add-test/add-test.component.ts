import { Component, OnInit } from '@angular/core';
import { test } from '../models/test.model';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  te:test;
  te1:test;

  constructor(private service:TestServiceService) {
    this.te=new test();
   }

  ngOnInit() {
  }

  saveTest(){
    

  this.service.addTest(this.te).subscribe(data => console.log(data) );
    console.log("in add.ts file")
    console.log(this.te.testTitle)
    console.log(this.te.testTotalMarks)
    console.log(this.te.testDuration)
    console.log(this.te.endTime)
    console.log(this.te.startTime)
  }


}
