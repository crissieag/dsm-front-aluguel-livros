import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Emprestimo } from 'src/app/models/emprestimo';
import { Funcionario } from 'src/app/models/funcionario';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-editar-emprestimo',
  templateUrl: './editar-emprestimo.component.html',
  styleUrls: ['./editar-emprestimo.component.css']
})
export class EditarEmprestimoComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
		private router: Router)
  { }

  livro!: Livro[];
  cliente!: Cliente[];
  funcionario!: Funcionario[];
  emprestimo!: Emprestimo;
  
  livroId!: number;
  clienteId!: number;
  funcionarioId!: number;
  dataEmprestimo!: string;
  dataDevolucao!: string;

  livroNome?: string;
  clienteNome?: string;

  id?: number;
  finalizado?: boolean;

  ngOnInit(): void {
    this.route.params.subscribe({
			next: (params) => {
				let { id } = params;
				if (id !== undefined) {
					this.id = id;

					this.http
						.get<Emprestimo>(
							`https://localhost:5001/api/emprestimos/listar/byId?id=${id}`
						)
						.subscribe({
							next: (emprestimo) => {
								this.emprestimo = emprestimo;
							},
						});
				}
			},
		});
  }

  editar(): void{
    let emprestimo: Emprestimo = {
			...this.emprestimo,
		};

		this.http
			.patch<Emprestimo>(
				`https://localhost:5001/api/emprestimos/editar/${this.id}`,
				emprestimo
			)
			.subscribe({ next: (emprestimo) => this.router.navigate(["pages/emprestimos"]) });
	}
}