import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
@Component({
  selector: 'component-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  agregarTarea(newTitle:HTMLInputElement,newDescription: HTMLInputElement){

    console.log('puto', newTitle.value, newDescription.value)
    this.taskService.addTask({
      title: newTitle.value, description: newDescription.value
    })
    
    return false;
  }

}
