import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path : 'sign-in', component: SignInComponent},
    {path : 'sign-up', component: SignUpComponent},
    {path : '', component: DashboardComponent},
];
