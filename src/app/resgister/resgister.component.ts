import { Component, OnInit } from '@angular/core';

// add imports

import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.css']
})
export class ResgisterComponent implements OnInit {

  private user: any = {};

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {

    localStorage.removeItem('token');

    this.user = {
      name: '',
      email: '',
      password: ''
    };
  }

  async signup(form: FormGroup) {

    if (form.valid) {
      try {
        const response = await this.usersService.create(this.user).toPromise();

        this.router.navigate(['/login']);

        return;

      } catch (error) {
        console.error(error)
      }
    } // end if

    return alert('Dados inválidos');
  }

}
