const data = new Date();
const diaSemana = data.getDay();
const mes = data.getMonth();
const anoAtual = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();
const mili = data.getSeconds();
diaDaSemana(diaSemana , mes)


function diaDaSemana(msg , meses) {
   
    const semana = ['Segunda-Feira', 'Terça-feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado', 'Domingo'];


    switch (msg) {
        case 1:
            exibirMensagem(semana[0]);
            break;
        case 2:
            exibirMensagem(semana[1]);
            break;
        case 3:
            exibirMensagem(semana[2]);
            break;
        case 4:
            exibirMensagem(semana[3]);
            break;
        case 5:
            exibirMensagem(semana[4]);
            break;
        case 6:
            exibirMensagem(semana[5]);
            break;
        case 7:
            exibirMensagem(semana[6]);
            break;
    }

    const messes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    switch (meses + 1) {
        case 1:
            recebeMes(messes[0]);
            break;
         case 2:
            recebeMes(messes[1]);
            break; 
            case 3:
                recebeMes(messes[2]);
            break; 
            case 4:
                recebeMes(messes[3]);
            break; 
            case 5:
                recebeMes(messes[4]);
            break; 
            case 6:
                recebeMes(messes[5]);
            break; 
            case 7:
                recebeMes(messes[6]);
            break; 
            case 8:
                recebeMes(messes[7]);
            break; 
            case 9:
                recebeMes(messes[8]);
            break; 
            case 10:
                recebeMes(messes[9]);
            break; 
            case 11:
                recebeMes(messes[10]);
            break;
            case 12:
                recebeMes(messes[11]);
            break;
    }
    function zeroAEsquerda(num){
        return num >= 10 ? num : `0${num}`;
    }
    function exibirMensagem(msg){
        console.log(msg);
        const diaSemanaText = document.querySelector('#diaSemana');
        diaSemanaText.innerHTML = `${msg} , ${diaSemana + 1} de `
    }
    function recebeMes (msg){
        console.log(msg)
        const mes = document.querySelector('#mes');
        mes.innerHTML = `${msg} de ${anoAtual} ${hora}:${zeroAEsquerda(min)}`
    }
}

