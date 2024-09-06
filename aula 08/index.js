function dataAnoDia(msg){
   const dia = msg.getDate();
   const mes = msg.getMonth();
   const ano = msg.getFullYear();
   return `Hoje é ${0 + dia}/${0 + mes + 1}/${ano}`;
}
const anoAtualDataDia = new Date();
console.log(dataAnoDia(anoAtualDataDia));