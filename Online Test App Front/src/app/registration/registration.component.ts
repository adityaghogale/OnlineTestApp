import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../entity/User';
import { RegistrationService } from '../services/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userName:string;
  userPassword:string;
  email:string;
  userCnfPassword:string;
  constructor(private registrationService:RegistrationService,private router:Router) {
  
  }

  ngOnInit(): void {
  }

  validatePass(){
    if(this.userPassword != this.userCnfPassword){
      alert("Password dont match");
    }
  }
  validate(){
    if(this.userPassword ==null ||this.userPassword==null||this.userCnfPassword==null||this.email==null)
      alert("Please fill all fields");
    else{
    if(this.userPassword == this.userCnfPassword){
    let tmpUser=new User();
    tmpUser.userName=this.userName;
    tmpUser.userPassword=this.userPassword;
    tmpUser.email=this.email;
    this.registrationService.registerUser(tmpUser).subscribe(data=>{
      console.log("username is "+data.userName);
      if(null==data) alert("Please Enter Valid User data");
      
      else if(data.userName=="") alert("username is already taken");
      else 
      {
        alert("New User "+data.userName+" is added with id : "+data.userId);
        this.router.navigate(['/login']);
    }
    })
  }
  else{
    alert("Password and Confirm paswword dont match");
  }
}
  }

}
