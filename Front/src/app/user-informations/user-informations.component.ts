import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface UserInfo {
  username: string;
  firstname: string;
  password: string;
}

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.css']
})
export class UserInformationComponent {
  userInfo: UserInfo = {
    username: 'Utilisateur123',
    firstname: 'Jean',
    password: ''
  };
  updateUserInfo() {
    console.log('🔄 Mise à jour des informations utilisateur');
    console.log('Pseudo:', this.userInfo.username);
    console.log('Prénom:', this.userInfo.firstname);
    console.log('Mot de passe:', this.userInfo.password);

    alert('Les informations utilisateur ont été mises à jour avec succès !');
  }
}
