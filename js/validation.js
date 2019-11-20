
let mensajes = document.getElementById('mensajes')
if(this.query.lenght === 0) {
  mensajes.innerHTML = 'Error... todos los campos son obligatorios';
  mensajes.classList.add('error');
  setTimeout(() => {
    mensajes.innerHTML = '';
    mensajes.classList.remove('error'); 
  }, 3000);
}