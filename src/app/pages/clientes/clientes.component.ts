import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Cliente } from 'src/app/models/cliente';
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  constructor(
    private http: HttpClient,
		private router: Router 
  ) {}

  clientes!: Cliente[];
  id?: number;
  nome?: string
  cpf?: string


  faTrash = faTrash;
	faPen = faPen;

  ngOnInit(): void {
    this.http.get<Cliente[]>("https://localhost:5001/api/clientes/listar").subscribe({
			next: (clientes) => {
				this.clientes = clientes;
			},
		});
  }

  

  cadastrar(): void{

    // montando o json
    let cliente: Cliente = {
      id: this.id,
      nome: this.nome,
      cpf: this.cpf
    };

    this.http
			.post<Cliente>("https://localhost:5001/api/clientes/cadastrar", cliente)
			.subscribe({ next: (cliente) => this.clientes.push(cliente) });
  }

  // Passar o parâmetro ID e mudar no HTML também
  editarCliente(id: number ): void {
    let cliente: Cliente = {
      id: this.id,
      nome: this.nome,
      cpf: this.cpf
    };
    this.router.navigate([`pages/clientes/editar/${id}`])
  }

	excluirCliente(id: number): void {
    this.http
			.delete<Cliente>(`https://localhost:5001/api/clientes/deletar/${id}`)
			.subscribe({
				next: () => {
					this.clientes = this.clientes.filter((value) => value.id != id);
				},
			});
  }

}
