import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutes } from "./app.routes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { AppComponent } from "./app.component";
import { AppTopBarComponent } from "./app.topbar.component";
import { AppSideBarComponent } from "./app.sidebar.component";
import { SampleDemoComponent } from "./demo/view/sampledemo.component";
import { CarService } from "./demo/service/carservice";
import { PostComponent } from "./demo/view/post/post.component";
import { MessageService } from "primeng/api";
import { CreatePostComponent } from "./demo/view/post/create-post.component";
import { NewsComponent } from "./demo/view/news/news.component";
import { PrimengModule } from "./demo/shared/primeng/primeng.module";

@NgModule({
    declarations: [
        AppComponent,
        AppTopBarComponent,
        AppSideBarComponent,
        SampleDemoComponent,
        PostComponent,
        CreatePostComponent,
        NewsComponent
    ],
    imports: [BrowserModule, AppRoutes, BrowserAnimationsModule, PrimengModule],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CarService,
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
