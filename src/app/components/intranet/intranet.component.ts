import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-intranet',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './intranet.component.html',
  styleUrl: './intranet.component.css'
})
export class IntranetComponent {

}
