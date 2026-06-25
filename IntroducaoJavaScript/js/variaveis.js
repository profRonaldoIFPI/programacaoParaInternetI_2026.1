/**
 * EXEMPLO 1: Variáveis e Tipos de Dados em JavaScript
 * 
 * Este arquivo demonstra como declarar variáveis (let, const) e os tipos de dados básicos.
 * Em JavaScript moderno, evitamos o uso de 'var' devido a problemas de escopo de função.
 */

// 1. Declaração de Variáveis
// 'let': Escopo de bloco, permite reatribuição do valor.
let nomeUsuario = "Visitante"; 
nomeUsuario = "Explorador do JS"; // Reatribuição permitida

// 'const': Escopo de bloco, valor constante (não pode ser reatribuído após inicializado).
const anoAtual = new Date().getFullYear();

// 2. Tipos de Dados Básicos (Primitivos)
const stringExemplo = "JavaScript é incrível!"; // String (Texto)
const numeroExemplo = 42;                        // Number (números inteiros)
const floatExemplo = 3.14159;                    // Number (números de ponto flutuante/decimais)
const booleanExemplo = true;                     // Boolean (verdadeiro/falso para decisões)
const nuloExemplo = null;                        // Null (ausência intencional de valor/objeto)
let indefinidoExemplo;                           // Undefined (variável declarada, mas sem valor atribuído)

// 3. Tipos de Dados Complexos (Objetos)
// Arrays: Listas ordenadas de valores
const arrayLinguagens = ["JavaScript", "HTML", "CSS", "Python"];

// Objetos: Coleções de chave-valor que representam entidades do mundo real
const objetoCurso = {
    nome: "Programação para Internet I",
    ano: 2026,
    semestre: "1º",
    modulo: "JS Básico"
};

// Função de apoio que extrai o estado atual das variáveis para exibição na página
function obterInfoVariaveis() {
    return {
        nomeUsuario,
        anoAtual,
        tipos: {
            string: typeof stringExemplo,
            numero: typeof numeroExemplo,
            boolean: typeof booleanExemplo,
            nulo: typeof nuloExemplo,
            indefinido: typeof indefinidoExemplo,
            array: Array.isArray(arrayLinguagens) ? 'array' : typeof arrayLinguagens,
            objeto: typeof objetoCurso
        },
        arrayLinguagens,
        objetoCurso
    };
}

// Log inicial que será capturado pela nossa página
console.log("⚡ [variaveis.js] Arquivo carregado com sucesso!");
