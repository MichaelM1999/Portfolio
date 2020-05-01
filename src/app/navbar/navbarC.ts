import { Component } from '@angular/core';

@Component ({
    selector: 'Navbar',
    templateUrl: './navbar-template.html'
})
export class Navbar {
    
    dropdownO () {
        document.getElementById('dropdown').style.display = 'block';
    }
    dropdownC () {
        document.getElementById('dropdown').style.display = 'none';
    }
}