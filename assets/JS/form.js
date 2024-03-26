document.getElementById('myForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault(); // Impede o envio do formulário se os campos estiverem vazios
    } else {
      const btn = document.querySelector('.btnSubmit')
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Enviando...';
    }
});
