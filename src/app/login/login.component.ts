import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public errorMessage: string;

  constructor(public authService: AuthService, private _router: Router) { }

  ngOnInit() {}

  public async onLogin(value) {
    if (this.loginForm.valid) {
      await this.authService.login(value.email, value.password);

      if (await this.authService.authenticated) {
        this._router.navigate(['newsletter']);
      }
    }
  }

  public async logout() {
    this.authService.logout();
  }

}
