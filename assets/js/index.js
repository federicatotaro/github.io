const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sto inviando...';

   const serviceID = 'default_service';
   const templateID = 'template_website';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Invia di nuovo';
      alert('Inviato! Il tuo messaggio verrà letto al più presto ;)');
    }, (err) => {
      btn.value = 'Invia';
      alert(JSON.stringify(err));
    });

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});
