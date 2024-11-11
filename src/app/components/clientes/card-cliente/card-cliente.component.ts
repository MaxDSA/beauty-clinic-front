import { Component, OnInit, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Cliente } from '../../../models/cliente.interface';

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.css'],
  standalone: true,
  imports: [MatCardModule]
})
export class CardClienteComponent implements OnInit {

  readonly cliente = input<Cliente>();

  constructor() { }

  ngOnInit() {
  }

}
