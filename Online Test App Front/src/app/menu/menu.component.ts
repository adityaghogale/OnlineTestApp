import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userName:string;
  constructor(private router:Router) { }

  ngOnInit() {
    this.userName=sessionStorage.getItem("user");
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
