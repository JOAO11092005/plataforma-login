/**
 * operador e && -> todas expresões precisam ser verdadeiras
 * operador ou ||
 * operador nao !
 */
//preventDeufalt
let usuario = document.getElementById('usuario');
let senha = document.getElementById('senha');
let botao = document.getElementById('botao');
let contador = 1;
botao.onclick = function(){
    if(usuario.value == 'admin' && senha.value == 'admin'){
        console.log(`Usuario Logado com sucesso ${contador}`);
        contador = contador + 1;
    }else{
        alert('Senha Invalida');
        console.log(`Usuario = ${usuario.value} & Senha = ${senha.value} ${contador} Tentativa`);
        contador = contador + 1;
    }
}





