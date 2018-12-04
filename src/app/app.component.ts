import {Component, OnInit} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public showMenu: boolean;

  constructor(private _router: Router, private _authService: AuthService,
              private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this._router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.showMenu = this._activatedRoute.snapshot.children[0].data.showMenu;
        }
      });
  }

  public async logout() {
    await this._authService.logout();

    this._router.navigate(['/login']);

  }

}
