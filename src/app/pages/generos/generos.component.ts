import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

import { Genero } from "src/app/models/genero";

@Component({
	selector: "app-generos",
	templateUrl: "./generos.component.html",
	styleUrls: ["./generos.component.css"],
})
export class GenerosComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private router: Router 
	) {}
	
	generos!: Genero[];

	id?: number;
	generoLivro!: string;

	faTrash = faTrash;
	faPen = faPen;


	ngOnInit(): void {
		this.http.get<Genero[]>("https://localhost:5001/api/generos").subscribe({
			next: (generos) => {
				this.generos = generos;
			},
		});
	}

	cadastrar(): void {
		let genero: Genero = {
			id: this.id,
			generoLivro: this.generoLivro,
		};

		this.http
			.post<Genero>("https://localhost:5001/api/generos/cadastrar", genero)
			.subscribe({ next: (genero) => this.generos.push(genero) });
	}

	editarGenero(id: number): void {
		let genero: Genero = {
			id: this.id,
			generoLivro: this.generoLivro,
		};
		this.router.navigate([`pages/generos/editar/${id}`])
	}

	excluirGenero(id: number): void {
		this.http
			.delete<Genero>(`https://localhost:5001/api/generos/deletar/${id}`)
			.subscribe({ next: () => {
      this.generos = this.generos.filter((value) => value.id != id )} });
	}
}
