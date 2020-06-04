import { login } from '../index.js'

export const iniciarSesion = () => {
  const divIniciarsesion = document.createElement('div');

  const viewIniciarsesion = `<button id='google'>Ingresar con Google</button>`

  divIniciarsesion.innerHTML = viewIniciarsesion;
  const btn = divIniciarsesion.querySelector('#google');
    btn.addEventListener('click', () => { login() })
  return divIniciarsesion;
}


