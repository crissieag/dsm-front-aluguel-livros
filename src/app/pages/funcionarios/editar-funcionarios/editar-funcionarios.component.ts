import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-editar-funcionarios',
  templateUrl: './editar-funcionarios.component.html',
  styleUrls: ['./editar-funcionarios.component.css']
})
export class EditarFuncionariosComponent implements OnInit {

  constructor(
    private http: HttpClient,
		private router: Router,
    private route: ActivatedRoute
  ) { }

  funcionario!: Funcionario;
  id?: number;
  nome?: string
  cpf?: string

  ngOnInit(): void {
    this.route.params.subscribe({
			next: (params) => {
				let { id } = params;
				if (id !== undefined) {
					this.id = id;

					
					this.http
						.get<Funcionario>(
							`https://localhost:5001/api/funcionarios/listar/${id}`
						)
						.subscribe({
							next: (funcionario) => {
								this.funcionario = funcionario;
							},
						});
				}
			},
		});
  }

  editar(): void {
		let funcionario: Funcionario = {
		...this.funcionario,
      	nome: this.nome
		};

		this.http
			.patch<Funcionario>(
				`https://localhost:5001/api/funcionarios/editar/${this.id}`,
				funcionario
			)
			.subscribe({ next: (funcionario) => this.router.navigate(["pages/funcionarios"]) });
	}

}
