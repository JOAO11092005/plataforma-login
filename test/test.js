var mesNacido = document.getElementById('mesnacido');
var botao = document.getElementById('botao');
var idade = document.getElementById('idade');
var mesAtual = 8;
var anoAtual = 2024;
var nome = document.getElementById('nome');


botao.onclick = function(botao){
if(mesAtual == mesNacido.value){
    var resultado = anoAtual - idade.value;
   alert(`Feliz Aniversario ${nome.value} 
Sua idade: ${idade.value}
Voce Naceu em: ${resultado}
    `)
   console.log(resultado)

}else if(mesAtual > mesNacido.value){
    var resultado = anoAtual - idade.value;
    alert(`Olá ${nome.value} 
Sua idade: ${idade.value}
voce Naceu em: ${resultado}
            `)
    console.log(resultado)


}else if(mesAtual < mesNacido.value){
    var resultado = anoAtual - idade.value;
    resultado = resultado - 1
    alert(`Olá ${nome.value} falta puco para o seu niver
Sua idade: ${idade.value}
voce Naceu em: ${resultado}
            `)
    console.log(resultado)
}else {
    alert('Insira as informacoes');
}
}

