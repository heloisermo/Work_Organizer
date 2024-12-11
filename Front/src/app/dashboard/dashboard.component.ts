import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular'; // Module FullCalendar
import timeGridPlugin from '@fullcalendar/timegrid'; // Plugin vue calendrier en grille horaire
import interactionPlugin from '@fullcalendar/interaction';

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
  imports: [CommonModule, FormsModule, FullCalendarModule], // Ajout du module FullCalendar
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
    events: [],};

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
