emailjs.init('MGF6Fn3DXYfns3xOj');

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var Telefono=document.getElementById('phone').value;
  var contactParams = {
    from_profilePro: document.getElementById('profilePro').value,
    from_name: document.getElementById('firstName').value, // Corrige aquí el typo de 'firtsName' a 'firstName'
    from_lastname: document.getElementById('lastName').value,
    from_company: document.getElementById('company').value,
    from_position: document.getElementById('position').value,
    from_email: document.getElementById('email').value,
    phoneNumber:Telefono,
  };

  emailjs.send('service_xcol6gm', 'template_a7m0cy4', contactParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Tu mensaje ha sido enviado!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Falló el envío del mensaje: ' + JSON.stringify(error));
    });
});
