const form = document.querySelector('#formulario');

form.addEventListener('submit' , function(e){
  alert("Evento carregado");
   e.preventDefault()
});