import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {

  constructor(private router : Router){}

  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.navigate(['/login'])

  }
}
