import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { Genero } from "src/app/models/genero";
@Component({
	selector: "app-editar",
	templateUrl: "./editar.component.html",
	styleUrls: ["./editar.component.css"],
})
export class EditarComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private router: Router,
		private route: ActivatedRoute
	) {}

	genero?: Genero;
	generoLivro?: string;
	id?: string;

	ngOnInit(): void {
		this.route.params.subscribe({
			next: (params) => {
				let { id } = params;
				if (id !== undefined) {
					this.id = id;

					
					this.http
						.get<Genero>(
							`https://localhost:5001/api/generos/listar/byId?id=${id}`
						)
						.subscribe({
							next: (genero) => {
								this.genero = genero;
							},
						});
				}
			},
		});
	}

	editar(): void {
		let genero: Genero = {
			...this.genero,
			generoLivro: this.generoLivro,
		};

		this.http
			.patch<Genero>(
				`https://localhost:5001/api/generos/editar/${this.id}`,
				genero
			)
			.subscribe({ next: (genero) => this.router.navigate(["pages/generos"]) });
	}
}
