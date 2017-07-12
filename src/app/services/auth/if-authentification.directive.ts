import { Directive,
         AfterViewInit,
         ApplicationRef,
         Attribute,
         Optional,
         HostBinding } from '@angular/core';

import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]'
})
export class IfAuthentificationDirective implements AfterViewInit {

  @HostBinding('class.hide') get display() {
    return !this.visible;
  }

  private visible: Boolean = false;
  private authenticatedAttribute: Boolean = true;

  constructor(
    private authService: AuthService,
    private ref: ApplicationRef,
    @Optional() @Attribute('appAuth') authenticatedAttribute: string
  ) {
    this.authenticatedAttribute = authenticatedAttribute ?
      JSON.parse(authenticatedAttribute) :
      this.authenticatedAttribute;
  }

  public ngAfterViewInit() {
    this.authService.checkIsLogin()
      .subscribe(res => {
        this.visible = res ? this.authenticatedAttribute : !this.authenticatedAttribute;
        this.ref.tick();
      });
  }

}
