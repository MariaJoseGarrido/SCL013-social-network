import { login } from '../index.js'

export const home = () => {
  const divHome = document.createElement('div');

  const viewHome = `<button id='google'>Ingresar con Google</button>`

  divHome.innerHTML = viewHome;
  const btn = divHome.querySelector('#google');
    btn.addEventListener('click', () => { login() })
  return divHome;
}