import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private readonly router = inject(Router);

  isLoggedIn(): boolean{
    return localStorage.getItem('accessToken')? true : false;
  }

  logout(){
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }

  recuperar(){

  }
}
