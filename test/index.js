function dados() {
    let nome = document.getElementById('nome');
    let idade = document.getElementById('idade')
    let botao = document.getElementById('botao')
    let resultado = document.querySelector('.resultado');
    let mesNacido = document.getElementById('mesnacido');

   
    
    if(dados[4] === dados[5]){
            
        console.log('Parabens')
        console.log(resultado );
    
    }else if(mesNacido > mesAtual){ 
    
        console.log('falta pouco')
        console.log(resultado - 1)
    
    
    }else if(mesNacido < mesAtual){
    
        console.log('seu niver passou')
        console.log(resultado - 1)
    
    
    }else{
        console.log('NaN')
    }

    botao.onclick = function (evento){
        let dados = [nome.value, idade.value, 2024];
        let anoNacido = dados[2] - dados[1];
        
        // console.log(anoNacido);
        //  console.log(dados);

         resultado.innerHTML += `<p>Seu nome: ${nome.value}`
         resultado.innerHTML += `<p>Idade: ${idade.value}</p>`
         resultado.innerHTML += `<p>Ano nacido: ${anoNacido}</p>`
        evento.preventDefault()
    }
}

dados()
