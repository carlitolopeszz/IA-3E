const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "você escuta musicas diariamente?",
        alternativas: [
            {texto: "Sim",
            afirmação:"escuto musicas diariamente "}, 

            {texto: "Não",
            afirmação:"não escuto musicas diariamente"}]
    },
    { 
        enunciado: "toca algum instrumento musical?",
        alternativas: [
            {texto: "Sim",
            afirmação:"sim, toco instrumentos musicais "}, 
                
            {texto: "Não",
            afirmação:"não toco instrumentos musicais"}]
    },
    { 
        enunciado: "tem uma banda favorita?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim, tenho uma banda favorita"}, 
                
            {texto: "Não",
            afirmação:"Não tenho uma banda favorita"}]
    },
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
