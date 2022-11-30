import { Component, OnInit } from '@angular/core';

import { Livro } from 'src/app/models/livro';
import { Cliente } from 'src/app/models/cliente';
import { Funcionario } from 'src/app/models/funcionario';
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.css']
})
export class EmprestimosComponent implements OnInit {

  constructor() { }

  livro?: Livro;
  cliente?: Cliente;
  funcionario?: Funcionario;

  
  faTrash = faTrash;
	faPen = faPen;


  ngOnInit(): void {
  }

  cadastrar(): void{

  }

	excluirEmprestimo(): void {}

}
