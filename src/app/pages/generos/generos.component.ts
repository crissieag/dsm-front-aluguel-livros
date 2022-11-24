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
	generos!: Genero[];

	id?: number;
	generoLivro!: string;

	faTrash = faTrash;
	faPen = faPen;

	constructor(
		private http: HttpClient,
		private router: Router,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.http.get<Genero[]>("https://localhost:5001/api/generos").subscribe({
			next: (generos) => {
				this.generos = generos;
			},
		});
	}

    // @ViewChildren("forGenero") forGenero:QueryList<ElementRef>;
    // ngAfterViewInit() {
    // this.forGenero.toArray().filter(r => r.nativeElement.hasAttribute(this.id))
    // }

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

		this.http
			.patch<Genero>(`https://localhost:5001/api/generos/editar/${id}`, genero)
			.subscribe({ next: (genero) => this.generos.push(genero) });
	}

	excluirGenero(id: number): void {
		this.http
			.delete<Genero>(`https://localhost:5001/api/generos/deletar/${id}`)
			.subscribe({ next: () => {
      this.generos = this.generos.filter((value) => value.id != id )} });
	}
}
