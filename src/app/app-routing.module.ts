import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TaskComponent } from './component/task/task.component';
import { TaskFormComponent } from './component/task-form/task-form.component';
import { TaskListComponent } from './component/task-list/task-list.component';


const routes: Routes = [
{path: 'materias',component: HomeComponent},
{path: 'home',component: TaskFormComponent},
{path: '',component: TaskFormComponent},
{path: 'tareas',component: TaskListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
