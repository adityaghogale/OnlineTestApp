import { Component, OnInit } from '@angular/core';
import { User } from '../entity/User';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  userList:User[];
  constructor(private service:LoginService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    this.service.getAllUsers().subscribe(data => {this.userList=data})
  }

}
