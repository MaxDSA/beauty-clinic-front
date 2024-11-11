import { Component, inject, OnInit } from '@angular/core';
import { CardClienteComponent } from './card-cliente/card-cliente.component';
import { MatIconModule } from '@angular/material/icon';
import { CoreService } from '../../services/core.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  standalone: true,
  imports: [CardClienteComponent, MatIconModule, CommonModule, FormsModule, RouterModule]
})
export class ClientesComponent implements OnInit {

  private readonly service = inject(CoreService);
  private readonly router = inject(Router);

  clientes = [];
  clientesFiltrados = [];
  textoBusca = '';

  constructor() { }

  ngOnInit() {
    this.service.getClientes().subscribe(res=>{
      this.clientes=res;
      this.clientesFiltrados = res
    })
  }

  chaveBusca(data: string) {
    this.textoBusca = this.format(data)
    this.busca();
  }

  busca() {
    if (this.textoBusca == '') {
      this.clientesFiltrados = this.clientes;
    } else {
      this.clientesFiltrados = this.clientes.filter((e: any) => {
        return this.format(e.nome).includes(this.textoBusca);
      });
    }
  }

  format(str: string):string{
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  novoCliente(){
    this.router.navigate(['/cliente']);
  }
}
