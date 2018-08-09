import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SampleDemoComponent } from './demo/view/sampledemo.component';
import { PostComponent } from './demo/view/post/post.component';
import { CreatePostComponent } from './demo/view/post/create-post.component';

export const routes: Routes = [
    { path: '', component: SampleDemoComponent },

    { path: 'posts', component: PostComponent },
    { path: 'posts/create', component: CreatePostComponent },
    {
        path: 'employees',
        loadChildren: '../app/demo/view/employee/employee.module#EmployeeModule'
    },
    {
        path: 'login',
        loadChildren: '../app/demo/auth/login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: '../app/demo/auth/register/register.module#RegisterModule'
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
