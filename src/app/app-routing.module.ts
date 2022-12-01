import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ClientesComponent } from "./pages/clientes/clientes.component";
import { EditarClientesComponent } from "./pages/clientes/editar-clientes/editar-clientes.component";
import { EditarEmprestimoComponent } from "./pages/emprestimos/editar-emprestimo/editar-emprestimo.component";
import { EmprestimosComponent } from "./pages/emprestimos/emprestimos.component";
import { EditarFuncionariosComponent } from "./pages/funcionarios/editar-funcionarios/editar-funcionarios.component";
import { FuncionariosComponent } from "./pages/funcionarios/funcionarios.component";
import { EditarComponent } from "./pages/generos/editar/editar.component";

import { GenerosComponent } from "./pages/generos/generos.component";
import { HomeComponent } from "./pages/home/home.component";
import { EditarLivroComponent } from "./pages/livros/editar-livro/editar-livro.component";
import { LivrosComponent } from "./pages/livros/livros.component";

const routes: Routes = [
	{
		path: "pages/livros",
		component: LivrosComponent,
	},
		{
		path: "pages/livros/editar/:id",
		component: EditarLivroComponent,
	},
	{
		path: "pages/generos",
		component: GenerosComponent,
	},
	{
		path: "pages/generos/editar/:id",
		component: EditarComponent,
	},
	{
		path: "pages/emprestimos",
		component: EmprestimosComponent,
	},
	{
		path: "pages/clientes",
		component: ClientesComponent,
	},
	{
		path: "pages/funcionarios",
		component: FuncionariosComponent,
	},
	{
		path: "pages/home",
		component: HomeComponent
	},
	{
		path: "pages/funcionarios/editar/:id",
		component: EditarFuncionariosComponent
	},
	{
		path: "pages/clientes/editar/:id",
		component: EditarClientesComponent
	},
	{
		path: "pages/emprestimos/editar/:id",
		component: EditarEmprestimoComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
