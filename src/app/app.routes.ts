import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { SampleDemoComponent } from "./demo/view/sampledemo.component";
import { PostComponent } from "./demo/view/post/post.component";
import { CreatePostComponent } from "./demo/view/post/create-post.component";

export const routes: Routes = [
    { path: "", component: SampleDemoComponent },

    { path: "posts", component: PostComponent },
    { path: "posts/create", component: CreatePostComponent },
    {
        path: "employees",
        loadChildren: "../app/demo/view/employee/employee.module#EmployeeModule"
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
