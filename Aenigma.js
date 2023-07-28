
function validarUsuarioSenha() {

    if ($("#usuario").val() == username && $("#senha").val() == password) {
  
      $("#loginCorreto").show();
      $("#loginErrado").hide();
    } else {
      $("#loginErrado").show();
      $("#loginCorreto").hide();
    }
  
  }