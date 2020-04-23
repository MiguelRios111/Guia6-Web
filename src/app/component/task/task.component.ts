import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../modelos/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'component-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

@Input() task: Task;

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  deleteTask(task:Task){
   if(confirm("¿Desea eliminar la tarea?")){
    this.taskService.deleteTask(task);}
    
  }

}
