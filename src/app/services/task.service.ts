import { Injectable } from '@angular/core';

import { Task } from '../modelos/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks2: Task[];
  constructor() {
    this.tasks2 = [

      // {title:'write' , description:'i have to write', hide:true}, 
      // {title:'realice tareas' , description:'tengo muchas tareas',hide:true}

    ];
  }
  getTask() {
   if(localStorage.getItem('tasks2') == null) {
    return this.tasks2;

   } else{
     this.tasks2 = JSON.parse(localStorage.getItem('tasks2'))
     return this.tasks2;
   }
   


  }

  addTask(task: Task) {

    let tasks2: Task[] = [];
    if (localStorage.getItem('tasks2') == null) {
      tasks2.push(task);
      localStorage.setItem('tasks2', JSON.stringify(tasks2));
    } else {

      tasks2= JSON.parse(localStorage.getItem('tasks2'));
      tasks2.push(task);
      localStorage.setItem('tasks2', JSON.stringify(tasks2))
    }


   

    // if(localStorage.getItem: 
    // this.tasks2.push(task);
    return false;
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.tasks2.length; i++) {
      if (task == this.tasks2[i]) {
        this.tasks2.splice(i, 1);
        localStorage.setItem('tasks2',JSON.stringify(this.tasks2));
      }

    }
  }

  updateTask() {

  }

}
