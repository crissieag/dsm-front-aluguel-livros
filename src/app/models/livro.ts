import { Genero } from "./genero";

export interface Livro {
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
}