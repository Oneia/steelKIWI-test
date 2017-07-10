import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailsComponent } from './component/user-details.component';

const routes: Routes = [
    {
        path: ':id',
        component: UserDetailsComponent
    }
];

export const UserDetailsRouter: ModuleWithProviders = RouterModule.forChild(routes);
