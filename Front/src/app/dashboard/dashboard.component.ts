import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task{
  name: string;
  completed: boolean;
  date?: string; 
  time?: string; 
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  newTask: Task = { name: '', completed: false };
  tasks: Task[] = [];


  addTask() {
    if (this.newTask.name.trim()) {
      this.tasks.push({ ...this.newTask }); 
      this.newTask = { name: '', completed: false }; 
    }
  }

  toggleTask(task: Task){
    task.completed = !task.completed;
  }

  deleteTask(task: Task){
    this.tasks = this.tasks.filter(t => t !== task);
    
  }
}
