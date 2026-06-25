/**
 * EXEMPLO 4: Manipulação do DOM (Document Object Model)
 * 
 * Este arquivo contém a lógica interativa para demonstrar a manipulação de elementos HTML,
 * alteração de estilos CSS, tratamento de eventos e criação dinâmica de elementos.
 */

document.addEventListener("DOMContentLoaded", () => {
    // === 1. CAPTURA DE ELEMENTOS ===
    // Console Virtual (Simulador de Console na Página)
    const consoleLogs = document.getElementById("console-logs");
    const btnLimparConsole = document.getElementById("btn-limpar-console");

    // Função auxiliar para imprimir no console virtual da página
    function logVirtual(mensagem, tipo = "info") {
        const timestamp = new Date().toLocaleTimeString();
        const logLine = document.createElement("div");
        logLine.className = `log-line log-${tipo} slide-in`;
        
        const spanTime = document.createElement("span");
        spanTime.className = "log-time";
        spanTime.textContent = `[${timestamp}] `;
        
        const spanText = document.createElement("span");
        spanText.className = "log-text";
        spanText.textContent = mensagem;

        logLine.appendChild(spanTime);
        logLine.appendChild(spanText);
        
        consoleLogs.appendChild(logLine);
        consoleLogs.scrollTop = consoleLogs.scrollHeight;

        // Também envia para o console real do navegador
        console.log(`[${tipo.toUpperCase()}] ${mensagem}`);
    }

    // Interceptar erros globais no console do navegador para exibição virtual
    window.onerror = function(message, source, lineno, colno, error) {
        logVirtual(`${message} (linha ${lineno})`, "error");
        return false;
    };

    // Ação do Botão Limpar Console
    btnLimparConsole.addEventListener("click", () => {
        consoleLogs.innerHTML = "";
        logVirtual("Console virtual limpo.", "system");
    });

    logVirtual("Iniciando demonstrações de JavaScript...", "system");
    logVirtual("DOM carregado e pronto para manipulação.", "system");

    // ==========================================
    // DEMONSTRAÇÃO 1: Variáveis & Tipos (Formulário)
    // ==========================================
    const formVariaveis = document.getElementById("form-variaveis");
    const inputNome = document.getElementById("input-nome");
    const inputNascimento = document.getElementById("input-nascimento");
    const resultVariaveis = document.getElementById("result-variaveis");

    formVariaveis.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita o comportamento padrão de atualizar a página

        const nome = inputNome.value.trim();
        const anoNascimento = parseInt(inputNascimento.value);

        if (!nome || isNaN(anoNascimento)) {
            logVirtual("Erro: Por favor, insira um nome e um ano válidos.", "error");
            return;
        }

        // Chamando funções definidas em funcoes.js e estruturas.js (no escopo global window)
        if (typeof gerarSaudacaoPersonalizada === "function" && typeof classificarIdade === "function") {
            const mensagemSaudacao = gerarSaudacaoPersonalizada(nome, anoNascimento);
            const idade = new Date().getFullYear() - anoNascimento;
            const classificacao = classificarIdade(idade);

            // Atualiza o HTML interno do elemento de resultado
            resultVariaveis.innerHTML = `
                <div class="card-result-container">
                    <p class="glowing-text">${mensagemSaudacao}</p>
                    <div class="meta-info-grid">
                        <div class="meta-item"><strong>Tipo de Dado (nome):</strong> <span>${typeof nome}</span></div>
                        <div class="meta-item"><strong>Tipo de Dado (ano):</strong> <span>${typeof anoNascimento}</span></div>
                        <div class="meta-item"><strong>Classificação de Idade:</strong> <span>${classificacao}</span></div>
                    </div>
                </div>
            `;

            logVirtual(`Variáveis avaliadas com sucesso para "${nome}" (Idade: ${idade}, ${classificacao}).`, "success");
        } else {
            logVirtual("Erro: Scripts 'funcoes.js' ou 'estruturas.js' não carregados corretamentes.", "error");
        }
    });


    // ==========================================
    // DEMONSTRAÇÃO 2: Funções & Cálculos Matemáticos
    // ==========================================
    const inputNum1 = document.getElementById("input-num1");
    const inputNum2 = document.getElementById("input-num2");
    const btnSomar = document.getElementById("btn-somar");
    const btnMultiplicar = document.getElementById("btn-multiplicar");
    const resultCalculo = document.getElementById("result-calculo");

    const executarOperacao = (operacao) => {
        const n1 = parseFloat(inputNum1.value);
        const n2 = parseFloat(inputNum2.value);

        if (isNaN(n1) || isNaN(n2)) {
            logVirtual("Erro de Entrada: Digite dois números válidos nos campos.", "error");
            resultCalculo.innerHTML = `<span class="error-msg">Por favor, insira números válidos.</span>`;
            return;
        }

        let resultado = 0;
        let operacaoNome = "";

        if (operacao === "soma") {
            resultado = typeof somar === "function" ? somar(n1, n2) : (n1 + n2);
            operacaoNome = "soma (+)";
        } else if (operacao === "multiplica") {
            resultado = n1 * n2;
            operacaoNome = "multiplicação (×)";
        }

        resultCalculo.innerHTML = `Resultado da ${operacaoNome}: <strong class="calc-highlight">${resultado}</strong>`;
        logVirtual(`Cálculo via função: ${n1} ${operacao === "soma" ? "+" : "×"} ${n2} = ${resultado}`, "success");
    };

    btnSomar.addEventListener("click", () => executarOperacao("soma"));
    btnMultiplicar.addEventListener("click", () => executarOperacao("multiplica"));


    // ==========================================
    // DEMONSTRAÇÃO 3: Loops & Repetição (Criação de Elementos)
    // ==========================================
    const inputLoopLimite = document.getElementById("input-loop-limite");
    const btnGerarLoop = document.getElementById("btn-gerar-loop");
    const containerDots = document.getElementById("container-dots");

    btnGerarLoop.addEventListener("click", () => {
        const limite = parseInt(inputLoopLimite.value);

        if (isNaN(limite) || limite < 1 || limite > 50) {
            logVirtual("Erro de Loop: Escolha um valor entre 1 e 50 para evitar travamentos do navegador.", "error");
            return;
        }

        // Limpa o conteúdo anterior
        containerDots.innerHTML = "";
        
        let sequencia = [];
        if (typeof gerarSequenciaNumerica === "function") {
            sequencia = gerarSequenciaNumerica(limite);
        } else {
            for (let i = 1; i <= limite; i++) sequencia.push(i);
        }

        logVirtual(`Executando loop de 1 até ${limite} e criando elementos dinamicamente...`, "info");

        // Criar elementos no DOM usando um loop / iteração
        sequencia.forEach((num, index) => {
            const dot = document.createElement("span");
            dot.className = "animated-dot";
            // Aplica um atraso de animação incremental para efeito em cascata
            dot.style.animationDelay = `${index * 30}ms`;
            dot.textContent = num;
            
            // Adiciona evento interativo em elementos dinâmicos
            dot.addEventListener("click", () => {
                logVirtual(`Item do Loop clicado: Bolinha Nº ${num}`, "info");
                dot.classList.toggle("active-dot");
            });

            containerDots.appendChild(dot);
        });

        logVirtual(`Loop concluído com sucesso! ${limite} bolinhas interativas criadas.`, "success");
    });


    // ==========================================
    // DEMONSTRAÇÃO 4: Manipulação Pura do DOM
    // ==========================================
    const domTargetBox = document.getElementById("dom-target-box");
    const inputDomText = document.getElementById("input-dom-text");
    const selectTheme = document.getElementById("select-theme");
    const btnToggleGlow = document.getElementById("btn-toggle-glow");
    const inputListItem = document.getElementById("input-list-item");
    const btnAddListItem = document.getElementById("btn-add-list-item");
    const domCustomList = document.getElementById("dom-custom-list");

    // 1. Modificar texto do elemento dinamicamente (Evento 'input')
    inputDomText.addEventListener("input", (e) => {
        const texto = e.target.value;
        const boxTitle = domTargetBox.querySelector(".box-preview-title");
        boxTitle.textContent = texto || "Área de Visualização";
    });

    // 2. Modificar classes CSS via JavaScript (Mudança de Tema)
    selectTheme.addEventListener("change", (e) => {
        const theme = e.target.value;
        
        // Limpa temas anteriores
        domTargetBox.classList.remove("theme-neon-violet", "theme-neon-cyan", "theme-neon-emerald");
        
        if (theme) {
            domTargetBox.classList.add(`theme-${theme}`);
            logVirtual(`Classe aplicada: ".theme-${theme}"`, "info");
        } else {
            logVirtual("Tema padrão redefinido.", "info");
        }
    });

    // 3. Alternar classe (classList.toggle)
    btnToggleGlow.addEventListener("click", () => {
        const ativo = domTargetBox.classList.toggle("glowing-box");
        logVirtual(`Efeito Glow ${ativo ? "ATIVADO" : "DESATIVADO"} (classList.toggle)`, "info");
    });

    // 4. Criação Dinâmica de nós de lista + Botão de Remoção (delete node)
    btnAddListItem.addEventListener("click", () => {
        const texto = inputListItem.value.trim();
        if (!texto) {
            logVirtual("Aviso: O texto do item da lista não pode estar vazio.", "error");
            return;
        }

        // Cria o elemento da lista (li)
        const li = document.createElement("li");
        li.className = "list-item slide-in-right";

        const textSpan = document.createElement("span");
        textSpan.textContent = texto;
        li.appendChild(textSpan);

        // Cria o botão de exclusão
        const btnDelete = document.createElement("button");
        btnDelete.className = "btn-delete-node";
        btnDelete.innerHTML = "&times;"; // Símbolo de multiplicação (X)
        btnDelete.ariaLabel = `Remover ${texto}`;
        
        // Trata o evento de remoção do próprio elemento
        btnDelete.addEventListener("click", () => {
            li.classList.add("fade-out");
            // Remove o item do DOM após o encerramento da animação
            li.addEventListener("animationend", () => {
                li.remove();
                logVirtual(`Item "${texto}" removido do DOM.`, "info");
            });
        });

        li.appendChild(btnDelete);
        domCustomList.appendChild(li);

        logVirtual(`Elemento <li> adicionado à lista via appendChild().`, "success");
        inputListItem.value = ""; // Reseta o input
        inputListItem.focus();
    });

    // Evento de tecla Enter para facilitar o input da lista
    inputListItem.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            btnAddListItem.click();
        }
    });

    // ==========================================
    // EXTRA: Seletor de Abas de Código (Code Viewer)
    // ==========================================
    const tabBtns = document.querySelectorAll(".tab-btn");
    const codeBlocks = document.querySelectorAll(".code-block");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove classe ativa de todas as abas
            tabBtns.forEach(b => b.classList.remove("active"));
            codeBlocks.forEach(block => block.classList.remove("active"));

            // Adiciona classe ativa à aba selecionada
            btn.classList.add("active");
            const targetId = btn.getAttribute("data-target");
            const targetBlock = document.getElementById(targetId);
            if (targetBlock) {
                targetBlock.classList.add("active");
            }
            
            logVirtual(`Aba de código alterada para: ${btn.textContent}`, "system");
        });
    });
});
