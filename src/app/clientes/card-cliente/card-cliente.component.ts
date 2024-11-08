import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.css'],
  standalone: true,
  imports: [MatCardModule]
})
export class CardClienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
