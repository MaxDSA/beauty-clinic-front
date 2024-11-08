import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email = '';
  password = '';

  constructor(private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    // Adicione lógica de autenticação aqui
    //console.log('Email:', this.email);
    //console.log('Senha:', this.password);
    this.router.navigate(['/clientes', {}])
  }
}