export interface Emprestimo {
    id?: number;
    dataEmprestimo?: string;
    dataDevolucao?: string;
    clienteID?: number;
    livroID?: number;
    funcionarioID?: number;
    status?: boolean;
}