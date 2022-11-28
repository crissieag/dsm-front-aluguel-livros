import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/models/cliente';
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() { }
  nome?: string
  cpf?: string


  faTrash = faTrash;
	faPen = faPen;

  ngOnInit(): void {
  }

  cadastrar(): void{

  }

  // Passar o parãmetro ID e mudar no HTML também
  editarCliente(): void {}

	excluirCliente(): void {}

}
