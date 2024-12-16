import { Component } from '@angular/core';
import { ApiService } from './api.service';
import {HttpClient} from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
  providers: [ApiService, HttpClient]
})
export class AppComponent {
  constructor(private apiService: ApiService) {}
  title = 'Front';
  users: any[] = [];
  
  ngOnInit() {
      this.apiService.getUsers().subscribe(
      (response: any) => { this.users = response; },
      (error) => { console.log(error); }
      
    );
    console.log(this.users);
  }

}
