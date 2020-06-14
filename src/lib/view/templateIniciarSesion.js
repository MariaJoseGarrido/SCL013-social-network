/* import { login } from '../index.js'

export const iniciarSesion = () => {
  const divIniciarsesion = document.createElement('div');

  const viewIniciarsesion = `<button id='google'>Ingresar con Google</button>`

  divIniciarsesion.innerHTML = viewIniciarsesion;
  const btn = divIniciarsesion.querySelector('#google');
    btn.addEventListener('click', () => { login() })
  return divIniciarsesion;
}; */

import {
  login
} from '../index.js'

export const iniciarSesion = () => {
  const divIniciarsesion = document.createElement('div');

  const viewIniciarsesion = 
  `  <div class="sign-in-container">
  <form class="formInicio" action="#">
    <h1 class='titleInicio'>Iniciar Sesión</h1>
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
    <h1>¡Hola!</h1>
    <img id="logoIniciar" src="./img/logo.png" alt="Logo SocialBeer">
    <p id="welcomeText">!Ingresa tus datos para unirte a la comunidad más cervecera!</p>
    <button class="btnInicio" id=#register>Registrarse</button>
  </div></>`


  divIniciarsesion.innerHTML = viewIniciarsesion;
  const btn = divIniciarsesion.querySelector('#google');
  btn.addEventListener('click', () => {
    login()
  })
  return divIniciarsesion;
};

