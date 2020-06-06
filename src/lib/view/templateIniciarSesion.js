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

  const viewIniciarsesion = `
  <div class="container" id="containerInicio">
  <div class="form-container sign-in-container">
  <form id=formInicio action="#">
    <h1 class='titleInicio'>Iniciar Sesión</h1>
    <div class='social-container'>
    <button href='#' id='facebook' class='social'><i class='fab fa-facebook-f'></i></button>
    <button href='#' id='google' class='social'><i class='fab fa-google-plus-g'></i></button>
    </div>
    <span></span>
    <input class=inputInicio type="email" placeholder="Email" />
    <input class=inputInicio type="password" placeholder="Contraseña" />
    <a id=forgetPassword href="#">¿olvidaste tu contraseña?</a>
    <button id='btnEntrar'>Entrar</button>
  </form>
</div>
</div>`


  divIniciarsesion.innerHTML = viewIniciarsesion;
  const btn = divIniciarsesion.querySelector('#google');
  btn.addEventListener('click', () => {
    login()
  })
  return divIniciarsesion;
};

/* export const registrarse = () => {
  const divRegistrarse = document.createElement('div');

  const viewRegistrarse = `
  <div class="container" id="containerInicio">
  <div class="form-container sign-in-container">
  <form action="#">
  <h1>Create Account</h1>
  <div class="social-container">
    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
  </div>
  <span>or use your cuenta for registration</span>
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Contraseña" />
  <button>Crear cuenta</button>
</form>
</div>
</div >`


  divRegistrarse.innerHTML = viewRegistrarse;
  const btn = divRegistrarse.querySelector('#register');
  btn.addEventListener('click', () => {
    login()
  })
  return divRegistrarse;
};
 */