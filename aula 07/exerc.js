/**
 * faca uma validacao de senha usando operacao ternaria 
 * Lembrete = "? : "
 */

const senha = document.querySelector('#senha');
const botao = document.querySelector('#botao');


botao.onclick = function(evento){
  const password = senha.value;
  const senhaAtual = 'Joao2005@@';

  const test = password === senhaAtual ? 'Usuario Logado com secesso' : 'Senha Incorreta';

  mensagem(test);
}

function criaP(){
    const p = document.createElement('p')
    return p;
}

function mensagem(msg){
    const mensagem = document.querySelector('.mensagem');
    mensagem.innerHTML = ''
    const p = criaP();


    p.innerHTML = msg;
    mensagem.appendChild(p);
}