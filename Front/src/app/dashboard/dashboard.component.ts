import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task{
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  newTask: string = '';
  tasks: Task[] = [];

  addTask(){
    if(this.newTask.trim())
    {
      this.tasks.push({
        name: this.newTask,
        completed: false
      });
      this.newTask = '';
    }
  }

  toggleTask(task: Task){
    task.completed = !task.completed;
  }

  deleteTask(task: Task){
    this.tasks = this.tasks.filter(t => t !== task);
    
  }
}
