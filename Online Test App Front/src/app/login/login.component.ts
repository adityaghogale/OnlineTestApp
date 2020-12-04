import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../entity/User';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string="";
  password:string="";
  isAdmin:boolean;
  showErrorMessage: boolean =false;

  constructor(private loginService:LoginService,private router:Router) {
  
  }


  ngOnInit(): void {
  }

  validate(){
    if(this.userName===""|| this.password===""){
      alert("please enter username and password");}
      else{
      let tmpEmp:User=new User();
      this.loginService.findUserByUsername(this.userName,this.password).subscribe(
        data =>{
          console.log("In service of find by username " +data.userName+" and password "+data.userPassword);
          console.log(data);
          if(null==data){
            alert('login failed');
          }
         
          if(data.userName===null||data.userPassword===null){
            alert("Invalid Username/Password !! enter valid details ")
          }
          else{
          //localStorage.setItem("user",this.userName)
          sessionStorage.setItem("userId",data.userId);
          sessionStorage.setItem('user',this.userName);
          sessionStorage.setItem('isAdmin',data.admin);
          console.log(sessionStorage.getItem('admin'));
          console.log(data.admin);
          if(true == data.admin) this.router.navigate(['/addTest']);
          else if(false == data.admin) this.router.navigate(['/participant']);
          }
        });
      }
      
  }

  
}

