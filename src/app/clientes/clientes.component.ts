import { Component, OnInit } from '@angular/core';
import { CardClienteComponent } from './card-cliente/card-cliente.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  standalone: true,
  imports: [CardClienteComponent, MatIconModule]
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
