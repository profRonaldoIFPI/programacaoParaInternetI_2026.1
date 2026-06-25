/**
 * EXEMPLO 2: Funções em JavaScript
 * 
 * Demonstração de funções tradicionais, expressões de função e Arrow Functions (funções de seta).
 */

// 1. Função Tradicional (Named Function)
// Possui "hoisting" (elevação) - pode ser chamada antes de sua declaração física no código.
function saudar(nome) {
    return `Olá, ${nome}! Seja bem-vindo ao aprendizado de JavaScript.`;
}

// 2. Expressão de Função (Function Expression)
// Atribuída a uma variável. Não possui hoisting.
const calcularIdade = function(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
};

// 3. Arrow Function (Funções de Seta - ES6+)
// Sintaxe moderna, limpa, e com retorno implícito quando escrita em uma única linha.
const somar = (a, b) => a + b;

// Se tiver apenas 1 parâmetro, os parênteses são opcionais
const converterParaMaiusculas = texto => texto.toUpperCase();

// Arrow function com bloco de código completo (requer o uso de 'return')
const gerarSaudacaoPersonalizada = (nome, anoNascimento) => {
    const idade = calcularIdade(anoNascimento);
    const saudacao = saudar(nome);
    return `${saudacao} Você tem (ou fará) ${idade} anos em ${new Date().getFullYear()}.`;
};

// Log inicial
console.log("⚡ [funcoes.js] Funções prontas para execução!");
