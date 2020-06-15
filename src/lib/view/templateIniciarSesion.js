// import { registrarse } from './templateRegistrarse';
import { login } from '../index.js';
import { register } from './register.js';

/* import { login } from '../index.js'

export const iniciarSesion = () => {
  const divIniciarsesion = document.createElement('div');

  const viewIniciarsesion = `<button id='google'>Ingresar con Google</button>`

  divIniciarsesion.innerHTML = viewIniciarsesion;
  const btn = divIniciarsesion.querySelector('#google');
    btn.addEventListener('click', () => { login() })
  return divIniciarsesion;
}; */

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
  <form class="formInicio" action="#">
  <h1 class='titleInicio'>Registrarse</h1>
  <div class='social-container'>
  <button href='#' id='facebook' class='social'><i class='fab fa-facebook-f'></i></button>
  <button href='#' id='google' class='social'><i class='fab fa-google-plus-g'></i></button>
  </div>
  <span></span>
  <input id="emailRegistar" class="inputInicio" type="email" placeholder="Email" />
  <input id="contrasenaRegistrar" class="inputInicio" type="password" placeholder="Contraseña" />
  <button class="btnInicio" id='registrarUsuario'>Registrarse</button>
  </form> 

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

