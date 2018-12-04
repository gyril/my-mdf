import { Component } from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-mdf';

  constructor(private _router: Router, private _authService: AuthService) { }

  public async logout() {
    await this._authService.logout();

    this._router.navigate(['/login']);

  }

}
