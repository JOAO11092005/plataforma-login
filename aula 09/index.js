const data = new Date();

function dataYear(msg) {
    const diaDasemana = msg.getDay();


    switch (diaDasemana) {
        case 0:
            mensagem('Domingo');
            break;
        case 1:
            mensagem('Segunda-Feira');
            break;
        case 3:
            mensagem('Terça-Feira');
            break;
        case 4:
            mensagem('Quarta-Feira');
            break;
        case 5:
            mensagem('Quinta-Feira');
            break;
        case 6:
            mensagem('Sexta-Feira');
            break;
        case 7:
            mensagem('Sabado');
            break;
    }
}
dataYear(data);


function mensagem(msg) {
    const mensagem = msg;
    return console.log(mensagem);
}