import { Cliente } from "./cliente";
import { Livro } from "./livro";

export interface Emprestimo {
    id?: number;
    dataEmprestimo?: Date;
    dataDevolucao?: Date;
    clienteId?: number;
    livroId?: number;
    funcionarioId?: number;
    finalizado?: boolean;
    livroNome?: string;
    clienteNome?: string;
    livro?: Livro;
    cliente?: Cliente;
}