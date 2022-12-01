import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { Livro } from "src/app/models/livro";
import { Genero } from "src/app/models/genero";

@Component({
	selector: "app-editar-livro",
	templateUrl: "./editar-livro.component.html",
	styleUrls: ["./editar-livro.component.css"],
})
export class EditarLivroComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private router: Router,
		private route: ActivatedRoute
	) {}

	generos?: Genero[];
	livro!: Livro;
	id?: number;
	titulo?: string;
	autor?: string;
	paginas?: number;
	isbn?: string;
	editora?: string;
	disponivel?: boolean;
	generoId?: number;
	publicacao?: string;
	generoLivro?: string;

	ngOnInit(): void {
		this.route.params.subscribe({
			next: (params) => {
				let { id } = params;
				if (id !== undefined) {
					this.id = id;

					this.http
						.get<Genero[]>("https://localhost:5001/api/generos")
						.subscribe({
							next: (generos) => {
								this.generos = generos;
							},
						});

					this.http
						.get<Livro>(
							`https://localhost:5001/api/livros/listar/byId?id=${id}`
						)
						.subscribe({
							next: (livro) => {
								this.livro = livro;
							},
						});
				}
			},
		});
	}

	editarLivro(): void {
		let livro: Livro = {
			...this.livro,
		};
		let generos: Genero = {
			...this.generos,
			generoLivro: this.generoLivro,
		};

		this.http
			.patch<Genero>(
				`https://localhost:5001/api/livros/editar/${this.id}`,
				livro
			)
			.subscribe({ next: (livro) => this.router.navigate(["pages/livros"]) });
	}
}
