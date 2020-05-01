import { Component } from '@angular/core';
import { Navbar } from './navbar/navbarC'

@Component({
  selector: 'app-root',
  template: `
  <div class="container main-container">
  <div class="row">
      <div class="col">
        <Navbar></Navbar>
      </div>
      <div class="col-10 contentBox">
        <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class AppComponent {
  title = 'Portfolio';
}
