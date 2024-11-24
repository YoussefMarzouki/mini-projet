import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{

}
