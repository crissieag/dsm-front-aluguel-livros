export interface Emprestimo {
    id?: number;
    dataEmprestimo?: Date;
    dataDevolucao?: Date;
    clienteID?: number;
    livroID?: number;
    funcionarioID?: number;
    finalizado?: boolean;
}