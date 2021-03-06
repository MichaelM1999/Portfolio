import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appRoutes } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { About } from './aboutMe/aboutC';
import { Contact } from './contact/contactC';
import { landingPage } from './landingPage/landingpageC';
import { Repos } from './repos/reposC';
import { Links } from './links/linksC';
import { Resume } from './resume/resumeC';
import { Navbar } from './navbar/navbarC';

@NgModule({
  declarations: [
    AppComponent,
    About,
    Contact,
    landingPage,
    Repos,
    Links,
    Resume,
    Navbar,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
