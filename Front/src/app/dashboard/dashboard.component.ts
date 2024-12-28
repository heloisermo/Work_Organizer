import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormComponent } from '../form/form.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { ChartScreenComponent } from '../chart-screen/chart-screen.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [NavBarComponent, FormComponent, CalendarComponent, ChartScreenComponent] // Import des composants
})
export class DashboardComponent {}
