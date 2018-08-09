import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { PrimengModule } from '../../shared/primeng/primeng.module';
import { RegisterRoutes } from './register.routing';

@NgModule({
    imports: [CommonModule, PrimengModule, RegisterRoutes],
    declarations: [RegisterComponent]
})
export class RegisterModule {}
