// ==========================================================================
// 1. SIMULADOR DE IMPACTO AMBIENTAL (SEÇÃO CALCULADORA)
// ==========================================================================

// Seleção dos elementos da calculadora
const campoHectares = document.getElementById('hectares-input');
const botaoCalcular = document.getElementById('btn-calcular');
const painelResultado = document.getElementById('resultado-calc');

// Elementos onde os números calculados serão exibidos
const displayAgua = document.getElementById('res-agua');
const displayCo2 = document.getElementById('res-co2');

/**
 * Executa o cálculo de impacto com base na quantidade de hectares inserida.
 */
function calcularImpactoAgro() {
    // Converte o valor digitado para número decimal
    const hectares = parseFloat(campoHectares.value);

    // Validação: verifica se é um número válido e maior que zero
    if (isNaN(hectares) || hectares <= 0) {
        alert("Por favor, insira uma quantidade de hectares válida e maior que zero.");
        campoHectares.focus();
        return;
    }

    // Constantes fictícias baseadas em médias de vantagens ecológicas por ano:
    // - Economia média de 25.000 litros de água por hectare com manejo inteligente.
    // - Retenção/redução média de 500 kg de CO₂ por hectare usando plantio direto.
    const LITROS_POR_HECTARE = 25000;
    const KG_CO2_POR_HECTARE = 500;

    // Realiza a lógica matemática
    const totalAguaEconomizada = hectares * LITROS_POR_HECTARE;
    const totalCo2Retido = hectares * KG_CO2_POR_HECTARE;

    // Atualiza os textos na tela formatando com separadores de milhar (padrão pt-BR)
    displayAgua.textContent = totalAguaEconomizada.toLocaleString('pt-BR');
    displayCo2.textContent = totalCo2Retido.toLocaleString('pt-BR');

    // Altera o estilo para exibir o painel de resultados (mudando o 'display: none' do CSS)
    painelResultado.style.display = 'flex';
}

// Escutador de evento para o clique do botão de calcular
botaoCalcular.addEventListener('click', calcularImpactoAgro);

// Permite calcular também ao pressionar a tecla "Enter" dentro do campo de texto
campoHectares.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcularImpactoAgro();
    }
});


// ==========================================================================
// 2. VALIDAÇÃO E GESTÃO DO FORMULÁRIO DE CONTATO
// ==========================================================================

// Seleção dos elementos do formulário
const formularioContato = document.getElementById('formulario-contato');
const painelFeedback = document.getElementById('feedback-form');

/**
 * Exibe uma mensagem de feedback (sucesso ou erro) estilizada pelo CSS.
 * @param {string} mensagem - O texto que aparecerá para o usuário.
 * @param {string} tipo - 'sucesso' ou 'erro' (define a classe CSS aplicável).
 */
function exibirMensagemFeedback(mensagem, tipo) {
    painelFeedback.textContent = mensagem;
    // Sobrescreve as classes para aplicar a estilização correta do style.css
    painelFeedback.className = `feedback-mensagem ${tipo}`;
}

// Escutador de evento para gerenciar o envio (submit) do formulário
formularioContato.addEventListener('submit', function(event) {
    // Impede o comportamento padrão do HTML de atualizar a página ao enviar o formulário
    event.preventDefault();

    // Captura os valores digitados limpos de espaços extras nas pontas (.trim())
    const nomeCompleto = document.getElementById('nome').value.trim();
    const emailUsuario = document.getElementById('email').value.trim();
    const mensagemUsuario = document.getElementById('mensagem').value.trim();

    // Validação de segurança em JavaScript
    if (nomeCompleto.length < 3) {
        exibirMensagemFeedback("Por favor, informe seu nome completo (mínimo de 3 caracteres).", "erro");
        return;
    }

    if (mensagemUsuario.length
