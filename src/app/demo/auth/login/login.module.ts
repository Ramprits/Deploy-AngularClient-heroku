import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { PrimengModule } from '../../shared/primeng/primeng.module';
import { LoginRoutes } from './login.routing';

@NgModule({
    imports: [CommonModule, PrimengModule, LoginRoutes],
    declarations: [LoginComponent]
})
export class LoginModule {}
