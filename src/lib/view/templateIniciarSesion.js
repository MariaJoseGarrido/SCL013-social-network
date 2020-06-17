import {
  login
} from '../index.js'

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
    <button href='#' id='facebook' class='social'><i class='fab fa-facebook-f'></i></button>
    <button href='#' id='google' class='social'><i class='fab fa-google-plus-g'></i></button>
    </div>
    <span></span>
    <input class="inputInicio" type="email" placeholder="Email" />
    <input class="inputInicio" type="password" placeholder="Contraseña" />
    <a id="forgetPassword" href="#">¿olvidaste tu contraseña?</a>
    <button class="btnInicio" id='btnEntrar'>Entrar</button>
  </form> 

  <div class="hello">
  <form>
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
  </div>
  </div>
  </div>
  `

  divIniciarsesion.innerHTML = viewIniciarsesion;
  const btn = divIniciarsesion.querySelector('#google');
  btn.addEventListener('click', () => {
    login()
  })

 /*  divIniciarsesion.innerHTML = viewIniciarsesion;
  const btnUserPassword = viewIniciarsesion.querySelector('#registrarUsuario');
  btnUserPassword.addEventListener('click', () => { 
    const email = viewIniciarsesion.querySelector('#emailRegistrar').value;
    const password = viewIniciarsesion.querySelector('#contrasenaRegistrar').value;
    register(email, password)
  })

  const btnvistaRegistrarse = viewIniciarsesion.querySelector('#registrarUsuario');
  btnvistaRegistrarse.addEventListener('click', () => { 
    registrarse();
  })  */

  return divIniciarsesion;
};

