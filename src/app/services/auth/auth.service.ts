import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as Firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private status: boolean;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
    ) {
    this.afAuth.authState.subscribe(res => {
      this.status = !!res;
    });
  }

  public checkIsLogin(): Observable<boolean> {
    return this.afAuth.authState.map(res => !!res);
  }

  public login(): void {
    this.afAuth.auth.signInWithPopup(new Firebase.auth.GithubAuthProvider())
      .then(() => {
        this.router.navigate(['/users']);
      });
  }

  public logout(): void {
    this.afAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['/home']);
      });
  }
}
