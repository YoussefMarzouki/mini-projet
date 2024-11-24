import { Component } from '@angular/core';
import { FmenuComponent } from "../fmenu/fmenu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  standalone: true,
  imports: [FmenuComponent,RouterOutlet],
  templateUrl: './fournisseur.component.html',
  styleUrl: './fournisseur.component.css'
})
export class FournisseurComponent {

}
