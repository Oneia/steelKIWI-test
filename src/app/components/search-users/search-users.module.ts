import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataGithubService } from '../../services/data-github/data-github.service';
import { UserSearchRouter } from './search-user.routing';

import { AppMaterialModule } from '../../app.material.module';

import { SearchUsersComponent } from './component/search-users.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserListTableComponent } from './component/user-list/user-list-table/user-list-table.component';
import { UserListBlockComponent } from './component/user-list/user-list-block/user-list-block.component';

@NgModule({
  imports: [
    UserSearchRouter,
    AppMaterialModule,
    CommonModule
  ],
  declarations: [
    SearchUsersComponent,
    UserListComponent,
    UserListTableComponent,
    UserListBlockComponent
  ],
  providers: [
    DataGithubService
  ]
})
export class SearchUsersModule { }
