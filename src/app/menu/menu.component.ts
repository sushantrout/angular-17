import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../model/menu';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems :MenuItem [] = [];
  constructor() {
    let items: MenuItem [] = [];
    for(let i = 17; i>= 8; i--) {
      items.push({name: `Angular ${i}`, url: `angular-${i}`});
    }
    this.menuItems = items;
  }
}
