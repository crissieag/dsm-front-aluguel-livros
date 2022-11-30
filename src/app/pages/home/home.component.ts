import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  rotaGeneros(): void {
    		this.router.navigate([`pages/generos`]);

  }

    rotaEmprestimos(): void {
    		this.router.navigate([`pages/emprestimos`]);

  }

    rotaClientes(): void {
    		this.router.navigate([`pages/clientes`]);

  }

    rotaFuncionarios(): void {
    		this.router.navigate([`pages/funcionarios`]);

  }

    rotaLivros(): void {
    		this.router.navigate([`pages/livros`]);

  }

}
