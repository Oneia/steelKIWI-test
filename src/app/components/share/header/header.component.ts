import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  constructor(
    private authService: AuthService
  ) { }

  private login() {
    this.authService.login();
  }

  private logout() {
    this.authService.logout();
  }

}
