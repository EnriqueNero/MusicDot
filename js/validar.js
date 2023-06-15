function validarFormulario() {
  var nome = document.getElementById('nome').value;
  var telefone = document.getElementById('foneid').value;
  var email = document.getElementById('emailid').value;
  var opiniao = document.getElementById('opiniao').value;

  if (nome === '' || nome.length < 10) {
    alert('Por favor, insira um nome com no mínimo 10 caracteres.');
    return false;
  }

  if (telefone === '' || telefone.length !== 10) {
    alert('Por favor, insira um número de telefone válido (10 dígitos).');
    return false;
  }

  if (email === '') {
    alert('Por favor, insira um endereço de e-mail.');
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um endereço de e-mail válido.');
    return false;
  }

  if (opiniao === '' || opiniao.length < 10 || opiniao.length > 50) {
    alert('Por favor, insira uma opinião com no mínimo 10 caracteres e no máximo 50 caracteres.');
    return false;
  }

  
  return true;
}