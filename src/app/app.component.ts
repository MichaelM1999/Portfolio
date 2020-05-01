import { Component } from '@angular/core';
import { Navbar } from './navbar/navbarC'

@Component({
  selector: 'app-root',
  template: `
  <Navbar></Navbar>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Portfolio';
}
