import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  readonly authService:AuthService=inject(AuthService);
  readonly router:Router=inject(Router);

  login(username:string,pass:string){
    this.authService.login(username,pass).subscribe(response=>{
      if(response){
         this.router.navigate(['extranet/fournisseur']);
        }else{
          alert("erreur");
        }
    })
  }
}
