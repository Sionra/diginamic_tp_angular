import { Routes } from '@angular/router';
import { utilisateursComponent } from './utilisateurs/utilisateurs.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'utilisateurs', component: utilisateursComponent },
    { path: 'utilisateurs/:id', component: PageTwoComponent },
    { path: '', component: HomeComponent}
];
