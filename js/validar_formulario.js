<script>
function validarFormulario() {
  
    var nome = document.getElementById('nomeid').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var opiniao = document.getElementById('opiniao').value;

  // Verificar se o campo "nome" está vazio e tem pelo menos 10 caracteres
  if (nome === '' || nome.length < 10) {
    alert('O campo nome deve ter pelo menos 10 caracteres.');
    return false;
  }

  // Verificar se o campo "telefone" está vazio e tem exatamente 10 caracteres
  if (telefone === '' || telefone.length !== 10) {
    alert('O campo telefone deve ter exatamente 10 caracteres.');
    return false;
  }

  // Verificar se o campo "email" está vazio e tem um formato válido
  if (email === '') {
    alert('O campo e-mail é obrigatório.');
    return false;
  }

  // Expressão regular para validar o formato do e-mail
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert('Por favor, insira um e-mail válido.');
    return false;
  }

  // Verificar se o campo "opiniao" está vazio e tem entre 10 e 50 caracteres
  if (opiniao === '' || opiniao.length < 10 || opiniao.length > 50) {
    alert('O campo opinião deve ter entre 10 e 50 caracteres.');
    return false;
  }

  // Se todas as validações passaram, o formulário pode ser enviado
  alert('Formulário enviado com sucesso!');
  return true;
}
</script>
