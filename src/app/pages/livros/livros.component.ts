import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { Livro } from "src/app/models/livro";
import { Genero } from "src/app/models/genero";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
interface Food {
	value: string;
	viewValue: string;
}
@Component({
	selector: "app-livros",
	templateUrl: "./livros.component.html",
	styleUrls: ["./livros.component.css"],
})
export class LivrosComponent implements OnInit {
	constructor(private http: HttpClient, private router: Router) {}
	foods: Food[] = [
		{ value: "steak-0", viewValue: "Steak" },
		{ value: "pizza-1", viewValue: "Pizza" },
		{ value: "tacos-2", viewValue: "Tacos" },
	];
	generos: Genero[] = [{ id: 123, generoLivro: "Romance" }];
	livros!: Livro[];
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


	faTrash = faTrash;
	faPen = faPen;

	ngOnInit(): void {
		this.http.get<Genero[]>("https://localhost:5001/api/generos").subscribe({
			next: (generos) => {
				this.generos = generos;
			},
		});

		this.http.get<Livro[]>("https://localhost:5001/api/livros").subscribe({
			next: (livros) => {
				this.livros = livros;
			},
		});
	}

	cadastrar(): void {
		let livro: Livro = {
			titulo: this.titulo,
			autor: this.autor,
			paginas: this.paginas,
			isbn: this.isbn,
			editora: this.editora,
			disponivel: true,
			generoId: this.generoId,
			publicacao: this.publicacao
		};

		this.http
			.post<Livro>("https://localhost:5001/api/livros/cadastrar", livro)
			.subscribe({ next: (livro) => this.livros.push(livro) });

			console.log(livro);
	}

	editarLivro(id: number): void {}

	excluirLivro(id: number): void {}
}
