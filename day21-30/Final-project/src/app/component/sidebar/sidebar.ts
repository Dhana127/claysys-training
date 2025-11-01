import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isBlue1 = false;

  toggleColor1() {
      this.isBlue1 = true;
    this.isBlue2 = false;
    this.isBlue3 = false;
    this.isBlue4 = false;
    this.isBlue5 = false;
    this.isBlue6 = false;
    this.isBlue7 = false;

  }
  isBlue2 = false;

  toggleColor2() {
       this.isBlue1 = false;
    this.isBlue6 = false;
    this.isBlue3 = false;
    this.isBlue4 = false;
    this.isBlue5 = false;
    this.isBlue2= true;
    this.isBlue7 = false;


  }
  isBlue3 = false;

  toggleColor3() {
      this.isBlue1 = false;
    this.isBlue2 = false;
    this.isBlue3 = true;
    this.isBlue4 = false;
    this.isBlue5 = false;
    this.isBlue6 = false;
    this.isBlue7 = false;

  }
  isBlue4 = false;

  toggleColor4() {
     this.isBlue1 = false;
    this.isBlue2 = false;
    this.isBlue3 = false;
    this.isBlue6 = false;
    this.isBlue5 = false;
    this.isBlue4 = true;
    this.isBlue7 = false;

  }
  isBlue5 = false;

  toggleColor5() {
       this.isBlue1 = false;
    this.isBlue2 = false;
    this.isBlue3 = false;
    this.isBlue4 = false;
    this.isBlue6 = false;
    this.isBlue5 = true;
    this.isBlue7 = false;


  }
  isBlue6 = false;

  toggleColor6() {
    this.isBlue1 = false;
    this.isBlue2 = false;
    this.isBlue3 = false;
    this.isBlue4 = false;
    this.isBlue5 = false;
    this.isBlue6 = true;
    this.isBlue7 = false;

  }
  isBlue7 = false;

  toggleColor7() {
    this.isBlue1 = false;
    this.isBlue2 =false;
    this.isBlue3 = false;
    this.isBlue4 = false;
    this.isBlue5 = false;
    this.isBlue6 = false;
    this.isBlue7 = true;

  }
}
