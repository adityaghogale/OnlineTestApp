import { Component, OnInit } from '@angular/core';
import { question } from '../models/question.model';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-add-que',
  templateUrl: './add-que.component.html',
  styleUrls: ['./add-que.component.css']
})
export class AddQueComponent implements OnInit {

  que:question;

  constructor(private service:TestServiceService) {
      this.que=new question();
   }

  ngOnInit() {
  }


  saveQue(){
    

    this.service.addQue(this.que).subscribe(data => console.log(data) );
      console.log("in add.ts file")
      console.log(this.que.questionTitle)
      
    }
}
