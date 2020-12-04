import { Component, OnInit } from '@angular/core';
import { question } from '../models/question.model';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-get-questions',
  templateUrl: './get-questions.component.html',
  styleUrls: ['./get-questions.component.css']
})
export class GetQuestionsComponent implements OnInit {

  queList:question[];
  constructor(private service:TestServiceService) { }

  ngOnInit() {
    this.getAllQuestions();
  }

  getAllQuestions(){
    this.service.getAllQuestions().subscribe(data => {this.queList=data})
  }
}
