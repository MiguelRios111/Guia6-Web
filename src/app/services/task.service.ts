import { Injectable } from '@angular/core';

import {Task} from '../modelos/Task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks: Task[];
  constructor() { 
    this.tasks=[

      {title:'write' , description:'i have to write'}, 
      {title:'realice tareas' , description:'tengo muchas tareas'}

    ];
  }
  getTask (){

    return this.tasks;
  }

  addTask (task: Task){
    this.tasks.push(task);
    return false;
  }

  deleteTask (){

  }

  updateTask (){

  }

}
