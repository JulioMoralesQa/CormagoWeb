const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_xcol6gm';
   const templateID = 'template_a7m0cy4';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'sendEmail';
      alert('Sent!');
    }, (err) => {
      btn.value = 'sendEmail';
      alert(JSON.stringify(err));
    });
});