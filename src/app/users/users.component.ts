import { Component, OnInit } from '@angular/core';

// add imports
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: Array<any> = [];
  private token = `bearer ${localStorage.getItem('token')}`;

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit() {

    this.usersService.getUsers(this.token)
      .subscribe(data => {
        this.users = data;
        console.log(this.users)
      })
  }

  private logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
