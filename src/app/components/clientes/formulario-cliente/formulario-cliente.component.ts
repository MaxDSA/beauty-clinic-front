import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-formulario-cliente',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.css'
})
export class FormularioClienteComponent {

  formulario = new FormGroup({
    nome : new FormControl(''),
    nascimento : new FormControl(''),
    cpf : new FormControl(''),
    telefone : new FormControl(''),
    endereco : new FormControl(''),
    instagram : new FormControl(''),
    contatoEmergencial : new FormControl(''),
  })

}
