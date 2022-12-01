import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit {

  constructor(
    	private http: HttpClient,
		private route: ActivatedRoute,
		private router: Router
  ) { }

  cliente!: Cliente;
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
						.get<Cliente>(
							`https://localhost:5001/api/clientes/listar/${id}`
						)
						.subscribe({
							next: (cliente) => {
								this.cliente = cliente;
							},
						});
				}
			},
		});
  }

  editar(): void{
    let cliente: Cliente = {
			...this.cliente,
      nome: this.nome
		};

		this.http
			.patch<Cliente>(
				`https://localhost:5001/api/clientes/editar/${this.id}`,
				cliente
			)
			.subscribe({ next: (cliente) => this.router.navigate(["pages/clientes"]) });
	}
}
