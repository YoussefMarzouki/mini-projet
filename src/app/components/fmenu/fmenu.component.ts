import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ComputerService } from '../../service/computer.service';

@Component({
  selector: 'app-fmenu',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './fmenu.component.html',
  styleUrl: './fmenu.component.css'
})
export class FmenuComponent {
  readonly authService:AuthService=inject(AuthService);
  readonly router:Router=inject(Router);
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
