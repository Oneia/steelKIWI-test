import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import {Observable} from 'rxjs/Observable';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

  public canActivate(): Observable<boolean> {
    return this.authService.checkIsLogin();
  }

}
