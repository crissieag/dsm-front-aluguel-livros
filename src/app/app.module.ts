import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from "@angular/material/list";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from '@angular/material/datepicker';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LivrosComponent } from './pages/livros/livros.component';
import { GenerosComponent } from './pages/generos/generos.component';
import { EmprestimosComponent } from './pages/emprestimos/emprestimos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/generos/editar/editar.component';
import { EditarLivroComponent } from './pages/livros/editar-livro/editar-livro.component';
import { EditarFuncionariosComponent } from './pages/funcionarios/editar-funcionarios/editar-funcionarios.component';
import { EditarClientesComponent } from './pages/clientes/editar-clientes/editar-clientes.component';
import { EditarEmprestimoComponent } from './pages/emprestimos/editar-emprestimo/editar-emprestimo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    EmprestimosComponent,
    GenerosComponent,
    LivrosComponent,
    ClientesComponent,
    FuncionariosComponent,
    HomeComponent,
    EditarComponent,
    EditarLivroComponent,
    EditarFuncionariosComponent,
    EditarClientesComponent,
    EditarEmprestimoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    FontAwesomeModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
