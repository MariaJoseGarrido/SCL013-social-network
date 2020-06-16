import  login  from '../index.js';
import { register } from './register.js';

export const registrarse = () => {
  console.log("funciona");
  const divRegistrarse = document.createElement('div');

  const viewRegistrarse = `
  <div class="container" id="containerInicio">
  <div class="form-container sign-in-container">
  <form action="#">
  <h1 id="registrarse">Crea una cuenta</h1>
  <div class="social-container">
    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
  </div>

  <input id="emailRegistar" type="email" placeholder="Email" />
  <input id="contrasenaRegistrar" type="password" placeholder="Contraseña" />
  <button id="registrarUsuario">¡Unirse!</button>
  </form>
  </div>
  </div>`


  divRegistrarse.innerHTML = viewRegistrarse;
  const btnUserPassword = viewRegistrarse.querySelector('#registrarUsuario');
  btnUserPassword.addEventListener('click', () => { 
    const email = viewRegistrarse.querySelector('#emailRegistrar').value;
    const password = viewRegistrarse.querySelector('#contrasenaRegistrar').value;
    register(email, password)
  })

  const btn = divRegistrarse.querySelector('#registrarse');
  btn.addEventListener('click', () => {
    login()
  })
  return divRegistrarse;
};