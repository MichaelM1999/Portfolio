import { Routes } from '@angular/router';
import { landingPage } from './landingPage/landingpageC';
import { Contact } from './contact/contactC';
import { About } from './aboutMe/aboutC';
import { Repos } from './repos/reposC';
import { Links } from './links/linksC';
import { Resume } from './resume/resumeC';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: landingPage },
    { path: 'contact', component: Contact },
    { path: 'about', component: About },
    { path: 'repos', component: Repos },
    { path: 'links', component: Links },
    { path: 'resume', component: Resume },
];


