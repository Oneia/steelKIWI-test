import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRouter } from './user-details-routing';
import { AppMaterialModule } from '../../app.material.module';

import { DataGithubService } from '../../services/data-github/data-github.service';

import { UserDetailsComponent } from './component/user-details.component';

@NgModule({
  imports: [
    UserDetailsRouter,
    CommonModule,
    AppMaterialModule
  ],
  declarations: [
    UserDetailsComponent
  ],
  providers: [
    DataGithubService
  ]
})
export class UserDetailsModule { }
