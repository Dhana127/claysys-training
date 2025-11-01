import { Component, NgModule, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Sidebar } from './component/sidebar/sidebar';
import { Loginpage } from './component/loginpage/loginpage';
import { Mainarea } from './component/mainarea/mainarea';
import { Inventoryaddpage } from './component/inventoryaddpage/inventoryaddpage';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports:[RouterOutlet,Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Final-Project');
  constructor(http : HttpClient){}
}
