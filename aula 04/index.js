const mensagem = document.getElementById('mensagem');
var hora = 13;

if(hora >= 13 && hora <= 17){
    mensagem.innerHTML = `Boa tarde`;
}else if(hora <= 12 && hora >= 5){
    mensagem.innerHTML = `Bom Dia`;
}else{
    mensagem.innerHTML = `Esta de Manhã`;
}