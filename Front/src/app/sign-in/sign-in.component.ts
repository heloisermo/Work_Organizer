import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SignUpComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  providers: [ApiService]
})
export class SignInComponent {
  constructor(private apiService: ApiService) {}
  users: any[] = [];
  email: string = '';
  password: string = '';
  pseudo: string = '';
  firstname: string = '';

  loadUsers() {
    this.apiService.getUsers().subscribe(
      (response: any) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  connectUser() {
    if (this.email && this.password ) {
      const user = { email: this.email, password: this.password };
      this.apiService.connectUser(user).subscribe(
        (response) => {
          console.log('Connexion réussie', response);
          this.loadUsers();  // Recharge les utilisateurs après ajout
        },
        (error) => {
          console.log('Connexion refusée', error);
        }
      );
    } else {
      console.log('Email et mot de passe requis.');
    }
  }}