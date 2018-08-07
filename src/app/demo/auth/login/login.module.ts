import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { PrimengModule } from '../../shared/primeng/primeng.module';

@NgModule({
    imports: [CommonModule, PrimengModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
