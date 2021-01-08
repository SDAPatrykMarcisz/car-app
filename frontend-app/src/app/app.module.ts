import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {appRoutingModule} from './app.routing';

import {BasicAuthInterceptor, ErrorInterceptor} from './_helpers';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {TaskListComponent} from "./taskList";
import {EditTaskComponent} from "@app/editTask";
import {ConvertStatusPipe} from "@app/pipes/status.pipe";
import {LoadingIndicatorComponent} from "@app/loading-indicator";
import {SearchCarComponent} from "@app/search/search-car/search-car.component";
import {SearchUserComponent} from "@app/search/search-user/search-user.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EditTaskComponent,
    HomeComponent,
    LoginComponent,
    SearchCarComponent,
    SearchUserComponent,
    LoadingIndicatorComponent,
    TaskListComponent,
    ConvertStatusPipe
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
