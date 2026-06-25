/**
 * EXEMPLO 3: Estruturas de Decisão e Repetição
 * 
 * Condicionais (if/else, switch), Operadores Lógicos, e Loops (for, while, forEach).
 */

// 1. Estruturas Condicionais (if / else if / else)
function classificarIdade(idade) {
    if (idade < 0) {
        return "Idade inválida";
    } else if (idade < 12) {
        return "Criança";
    } else if (idade < 18) {
        return "Adolescente";
    } else if (idade < 60) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

// 2. Estrutura Switch (Alternativa limpa para múltiplas condições fixas)
function traduzirCor(corIngles) {
    switch (corIngles.toLowerCase()) {
        case "red":
            return "Vermelho";
        case "blue":
            return "Azul";
        case "green":
            return "Verde";
        case "yellow":
            return "Amarelo";
        default:
            return "Cor desconhecida";
    }
}

// 3. Estruturas de Repetição (Loops)

// Loop FOR: Usado quando sabemos previamente o número de repetições
function gerarSequenciaNumerica(limite) {
    const numeros = [];
    for (let i = 1; i <= limite; i++) {
        numeros.push(i);
    }
    return numeros;
}

// Loop WHILE: Usado quando a repetição depende de uma condição booleana contínua
function contagemRegressiva(inicio) {
    const passos = [];
    let contador = inicio;
    while (contador > 0) {
        passos.push(contador);
        contador--;
    }
    passos.push("Decolar! 🚀");
    return passos;
}

// Iteração com Arrays (forEach): Método utilitário funcional para percorrer arrays
function multiplicarItens(array, multiplicador) {
    const resultado = [];
    array.forEach(item => {
        if (typeof item === 'number') {
            resultado.push(item * multiplicador);
        }
    });
    return resultado;
}

// Log inicial
console.log("⚡ [estruturas.js] Estruturas condicionais e de repetição carregadas!");
