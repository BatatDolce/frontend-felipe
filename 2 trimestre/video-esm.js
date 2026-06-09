
export function alugarFilme(nomeFilme, dataAluguel, preco) {
    return `Filme: "${nomeFilme}" | Alugado em: ${dataAluguel} | Preço: R$ ${preco.toFixed(2)}`;
}

export function devolverFilme(nomeFilme, dataDevolucao) {
    return `Filme: "${nomeFilme}" | Devolvido em: ${dataDevolucao} | Devolução concluída com sucesso!`;
}