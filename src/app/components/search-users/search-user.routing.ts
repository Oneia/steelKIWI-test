import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchUsersComponent } from './component/search-users.component';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
    {
        path: '',
        component: SearchUsersComponent,
        children: [
          {
            path: ':id',
            component: UserListComponent
          }
        ]
    }
];

export const UserSearchRouter: ModuleWithProviders = RouterModule.forChild(routes);
