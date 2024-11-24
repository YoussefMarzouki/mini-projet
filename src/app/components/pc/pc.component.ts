import { Component, Input } from '@angular/core';
import { Computer } from '../../model/computer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pc',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pc.component.html',
  styleUrl: './pc.component.css'
})
export class PcComponent {
  @Input() pc!:Computer
}
