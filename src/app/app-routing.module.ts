import { Routes } from '@angular/router';
import { landingPage } from './landingPage/landingpageC';
import { Contact } from './contact/contactC';
import { About } from './aboutMe/aboutC';
import { Repos } from './repos/reposC';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: landingPage },
    { path: 'contact', component: Contact },
    { path: 'about', component: About },
    { path: 'repos', component: Repos },
];


