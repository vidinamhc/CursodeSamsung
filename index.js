
var btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", function() {
  var camposValidos = validarCampos(); 
  if (camposValidos) {
    alert("La inscripción ha sido correcta");
  }
});document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;
    const confirmPassword = form.elements['confirm-password'].value;

    if (!name || !email || !password || !confirmPassword) {
      alert('Por favor, rellena todos los apartados.');
      event.preventDefault();
    } else if (password.length < 8) {
      alert('Tu contraseña tiene que tener 8 caracteres o más.');
      event.preventDefault();
    } else if (password !== confirmPassword) {
      alert('Las contraseñas no concuerdan.');
      event.preventDefault();
    } else {


      window.location.href = 'success.html';
      event.preventDefault();
    }
  });
});


