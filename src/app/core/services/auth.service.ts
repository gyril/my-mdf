import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  authState: any = null;

  constructor (private _firebaseAuth: AngularFireAuth) {
    // this.user = this._firebaseAuth.authState;
    this._firebaseAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  public async login (email: string, password: string) {
    this._firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.authState = value;
      })
      .catch(err => {
        console.log('err', err);
        console.log('Something went wrong:', err.message);
      });
  }

  public async logout () {
    this._firebaseAuth
      .auth
      .signOut();
    console.log('Déconnexion');
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

}
