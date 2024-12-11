import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import timeGridPlugin from '@fullcalendar/timegrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import { SignInComponent } from '../sign-in/sign-in.component';
import { RouterModule } from '@angular/router';

interface CalendarEvent {
  title: string;
  start: string;
  allDay?: boolean;
}

interface Task{
  name: string;
  completed: boolean;
  date?: string; 
  time?: string; 
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, FullCalendarModule, SignInComponent, RouterModule], 
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  newTask: Task = { name: '', completed: false };
  tasks: Task[] = [];
  calendarOptions: any = {
    plugins: [timeGridPlugin, interactionPlugin],
    initialView: 'timeGridDay',
    editable: true,
    droppable: true,
    dropAccept: ".list-group-item", 
    events: [],
    eventReceive : this.handleEventReceive.bind(this),};

    onDragStart(event: DragEvent, task: Task) {
      if (event.dataTransfer) {
        event.dataTransfer.setData('text/plain', task.name); 
        event.dataTransfer.effectAllowed = 'move'; 
        console.log(`✅ Drag start: ${task.name}`);
      }
    }

    onDragEnd(event: DragEvent) {
      console.log('🛑 Drag ended', event);
    }

    handleEventReceive(event: any) {
      const taskName = event.draggedEl.getAttribute('data-task-name'); 
      console.log(`📦 Tâche reçue: ${taskName} à la date ${event.dateStr}`);
    
      if (taskName) {
        const newEvent: CalendarEvent = {
          title: taskName,
          start: event.dateStr, 
          allDay: true
        };
        this.calendarOptions.events = [...this.calendarOptions.events, newEvent];
        event.event.remove();
      } else {
        console.error('❌ Impossible de récupérer le nom de la tâche');
      }
    }
    
    addTask() {
      if (this.newTask.name.trim()) {
        this.tasks.push({ ...this.newTask }); 
        if (this.newTask.date) {
          this.calendarOptions.events = [
            ...this.calendarOptions.events,
            {
              title: this.newTask.name,
              start: `${this.newTask.date}T${this.newTask.time ? this.newTask.time : '00:00:00'}`,
              allDay: !this.newTask.time
            }
          ];
        }
        this.newTask = { name: '', completed: false }; 
      }
    }

  toggleTask(task: Task){
    task.completed = !task.completed;
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);

    this.calendarOptions.events = this.calendarOptions.events.filter((event: CalendarEvent) => 
      event.title !== task.name || event.start !== `${task.date}T${task.time ? task.time : '00:00:00'}`
    );
  }
  
}
