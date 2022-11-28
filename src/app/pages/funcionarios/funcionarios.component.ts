import { Component, OnInit } from '@angular/core';

import { Funcionario } from 'src/app/models/funcionario';
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

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
  editarFuncionario(): void {}

	excluirFuncionario(): void {}

}
