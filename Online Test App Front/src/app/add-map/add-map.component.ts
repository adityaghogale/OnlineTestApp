import { Component, OnInit } from '@angular/core';
import { map } from '../models/map.model';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-add-map',
  templateUrl: './add-map.component.html',
  styleUrls: ['./add-map.component.css']
})
export class AddMapComponent implements OnInit {
m:map;
  constructor(private service:TestServiceService) { this.m=new map();}

  ngOnInit() {
  }

  saveMap(){
    

    this.service.addMap(this.m).subscribe(data => this.m=data);
    console.log("in map.ts file")
    console.log(this.m.testId)
    console.log(this.m.queId)
   
  }

}
