// ==========================================
// 1. SELEÇÃO DE ELEMENTOS (DOM)
// ==========================================
// Selecionando os elementos do HTML que vamos manipular
const botaoEnviar = document.querySelector('#btn-enviar');
const formulario = document.querySelector('#meu-formulario');
const feedbackTexto = document.querySelector('.feedback-mensagem');

// ==========================================
// 2. FUNÇÕES E LÓGICA DO SISTEMA
// ==========================================

/**
 * Função para validar os campos do formulário
 * @returns {boolean} - Retorna verdadeiro se o formulário for válido
 */
function validarFormulario() {
    const nomeInput = document.querySelector('#nome').value;
    
    if (nomeInput.trim() === "") {
        exibirMensagem("Por favor, preencha o campo de nome.", "erro");
        return false;
    }
    return true;
}

/**
 * Função para exibir feedback visual para o usuário
 * @param {string} texto - A mensagem a ser exibida
 * @param {string} tipo - O tipo da mensagem (ex: 'sucesso' ou 'erro')
 */
function exibirMensagem(texto, tipo) {
    feedbackTexto.textContent = texto;
    feedbackTexto.className = `feedback-mensagem ${tipo}`; // Adiciona classes para estilização CSS
    
    // Pequena animação/efeito de fade-in simples usando classes
    feedbackTexto.style.opacity = 1;
}

// ==========================================
// 3. ESCUTADORES DE EVENTOS (EVENT LISTENERS)
// ==========================================

// Responde ao clique do botão ou envio do formulário
formulario.addEventListener('submit', function(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault(); 
    
    // Chama a função de validação
    const formularioValido = validarFormulario();
    
    if (formularioValido) {
        exibirMensagem("Formulário enviado com sucesso! Viva a interatividade!", "sucesso");
        // Aqui você continuaria com a lógica de envio de dados
    }
});
