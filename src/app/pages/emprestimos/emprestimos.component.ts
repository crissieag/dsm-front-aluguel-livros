import { Component, OnInit } from '@angular/core';

import { Livro } from 'src/app/models/livro';
import { Cliente } from 'src/app/models/cliente';
import { Funcionario } from 'src/app/models/funcionario';
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Emprestimo } from 'src/app/models/emprestimo';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.css']
})
export class EmprestimosComponent implements OnInit {

  constructor(
    private http: HttpClient,
		private router: Router 
  ) {}

  livros!: Livro[];
  clientes!: Cliente[];
  funcionarios!: Funcionario[];
  emprestimos!: Emprestimo[];
  
  livroId!: number;
  clienteId!: number;
  funcionarioId!: number;
  dataEmprestimo!: string;
  dataDevolucao!: string;

  livroNome?: string;
  clienteNome?: string;

  id?: number;
  finalizado?: boolean;

  
  faTrash = faTrash;
	faPen = faPen;


  ngOnInit(): void {
    this.http.get<Livro[]>("https://localhost:5001/api/livros").subscribe({
			next: (livros) => {
				this.livros = livros;
			},
		});

    this.http.get<Cliente[]>("https://localhost:5001/api/clientes/listar").subscribe({
			next: (clientes) => {
				this.clientes = clientes;
			},
		});

    this.http.get<Funcionario[]>("https://localhost:5001/api/funcionarios/listar").subscribe({
			next: (funcionarios) => {
				this.funcionarios = funcionarios;
			},
		});

    this.http.get<Emprestimo[]>("https://localhost:5001/api/emprestimos").subscribe({
			next: (emprestimos) => {
				this.emprestimos = emprestimos;
			},
		});
  }

  cadastrar(): void{
    let emprestimo: Emprestimo = {
      id: this.id,
      dataEmprestimo: new Date(this.dataEmprestimo),
      dataDevolucao: new Date(this.dataDevolucao),
      clienteId: Number(this.clienteId),
      livroId: Number(this.livroId),
      funcionarioId: Number(this.funcionarioId),
      finalizado: this.finalizado,
      clienteNome: this.clienteNome
    };

    this.http
			.post<Emprestimo>("https://localhost:5001/api/emprestimos/cadastrar", emprestimo)
			.subscribe({ next: (emprestimo) => this.emprestimos.push(emprestimo) });

    console.log(emprestimo);
  }

  editarEmprestimo(id: number): void {
    let emprestimo: Emprestimo = {
      id: this.id,
      finalizado: this.finalizado,
      dataDevolucao: new Date(this.dataDevolucao)
    };
    this.router.navigate([`pages/emprestimos/editar/${id}`])
  }


	excluirEmprestimo(id: number): void {}

}
