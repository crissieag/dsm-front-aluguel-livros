import { Component, OnInit } from '@angular/core';

import { Funcionario } from 'src/app/models/funcionario';
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  constructor(
    private http: HttpClient,
		private router: Router 
  ) {}

  funcionarios!: Funcionario[];
  id?: number;
  nome?: string
  cpf?: string


  faTrash = faTrash;
	faPen = faPen;

  ngOnInit(): void {
    this.http.get<Funcionario[]>("https://localhost:5001/api/funcionarios/listar").subscribe({
			next: (funcionarios) => {
				this.funcionarios = funcionarios;
			},
		});
  }

  cadastrar(): void{
    let funcionario: Funcionario = {
      id: this.id,
      nome: this.nome,
      cpf: this.cpf
    };

    this.http
			.post<Funcionario>("https://localhost:5001/api/funcionarios/cadastrar", funcionario)
			.subscribe({ next: (funcionario) => this.funcionarios.push(funcionario) });
  }

  // Passar o parãmetro ID e mudar no HTML também
  editarFuncionario(): void {}

	excluirFuncionario(): void {}

}
