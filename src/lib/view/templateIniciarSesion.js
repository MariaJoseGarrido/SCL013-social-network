export const iniciarSesion = () => {
  const divIniciarsesion = document.createElement('div');

  const viewIniciarsesion = 
  `  
  <div class="background-iniciar">
  <div class="banner d-flex justify-content-center">
  <img class="logoBanner" src="./img/logo.png" alt="Logo SocialBeer">
 </div>
<div class="sign-in-container">
    <form class="formInicio">
    <h1 class='titleSesion'>Iniciar Sesión</h1>
    <div class='social-container'>
    <button href='#' id='facebook-i' class='social'><i class='fab fa-facebook-f'></i></button>
    <button href='#' id='google-i' class='social'><i class='fab fa-google-plus-g'></i></button>
    </div>
    <span></span>
    <input class="inputWeb" id="emailInicio" type="email" placeholder="Email" />
    <input class="inputWeb" id="passawordInicio" type="password" placeholder="Contraseña" />
    <a id="forgetPassword" href="#">¿olvidaste tu contraseña?</a>
    <button class="btnWeb" id='btnEntrar'>Entrar</button>
    </form>
  <div class="hello">
  <form>
  <h1 class='titleInicio'>Crear una cuenta</h1>
  <div class='social-container'>
  <button href='#' id='facebook-r' class='social'><i class='fab fa-facebook-f'></i></button>
  <button href='#' id='google-r' class='social'><i class='fab fa-google-plus-g'></i></button>
  </div>
  <span></span>
  <input class="inputWeb" type="email" id="emailRegistro" placeholder="Email" />
  <input class="inputWeb" type="password" id="passwordRegistro"placeholder="Contraseña" />
  <button class="btnWeb" id='btnRegistrarse'>Registrarse</button>
</form> 
  </div>
  </div>
  </div>
  `

  divIniciarsesion.innerHTML = viewIniciarsesion;
  return divIniciarsesion;
};

