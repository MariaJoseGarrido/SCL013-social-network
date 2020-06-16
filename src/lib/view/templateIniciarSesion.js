export const iniciarSesion = () => {
  const divIniciarsesion = document.createElement('div');

  const viewIniciarsesion = 
  `  <div class="sign-in-container">
  <form class="formInicio">
    <h1 class='titleInicio'>Iniciar Sesión</h1>
    <div class='social-container'>
    <button href='#' id='facebook' class='social'><i class='fab fa-facebook-f'></i></button>
    <button href='#' id='google' class='social'><i class='fab fa-google-plus-g'></i></button>
    </div>
    <span></span>
    <input class="inputInicio" id="emailInicio" type="email" placeholder="Email" />
    <input class="inputInicio" id="passawordInicio" type="password" placeholder="Contraseña" />
    <a id="forgetPassword" href="#">¿olvidaste tu contraseña?</a>
    <button class="btnInicio" id='btnEntrar'>Entrar</button>
    </form>
  <div class="hello">
  <form class="formInicio">
  <h1 class='titleInicio'>Crear una cuenta</h1>
  <div class='social-container'>
  <button href='#' id='facebook' class='social'><i class='fab fa-facebook-f'></i></button>
  <button href='#' id='google' class='social'><i class='fab fa-google-plus-g'></i></button>
  </div>
  <span></span>
  <input class="inputInicio" type="email" id="emailRegistro" placeholder="Email" />
  <input class="inputInicio" type="password" id="passwordRegistro"placeholder="Contraseña" />
  <button class="btnInicio" id='btnRegistrarse'>Registrarse</button>
</form> 
  </div></div>`

  divIniciarsesion.innerHTML = viewIniciarsesion;
  return divIniciarsesion;
};

