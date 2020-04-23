import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { TaskFormComponent } from './component/task-form/task-form.component';
import { TaskComponent } from './component/task/task.component';
import { TaskListComponent } from './component/task-list/task-list.component';
import {TaskService} from './services/task.service'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NavigationComponent,
    TaskFormComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
