import { myFunction } from './lib/index.js';
import { changeRouter } from './lib/router.js';
import { identification } from './lib/view/templateIdentificacion.js'
import { menu } from './lib/view/templateMenu.js';
import { home, registrarse } from './lib/view/templateHome.js';
// import { registrarse } from './lib/view/templateHome.js';
import { iniciarSesion } from './lib/view/templateIniciarSesion.js';
import { blog } from './lib/view/templateBlog.js';
import { comuniBeer } from './lib/view/templateComuniBeer.js';
import { dondebeber } from './lib/view/templateDondeBeber.js';
import { eventos } from './lib/view/templateEventos.js';
import { abastecete } from './lib/view/templateAbastecete.js';
import { cerveceriasChilenas } from './lib/view/templateCerveceriaschilenas.js';
import { contacto } from './lib/view/templateContacto.js';


const init = () => {
  document.getElementById('root').innerHTML = menu()
  window.addEventListener('hashchange', () => {
    myFunction();
    console.log(window.location.hash);
    changeRouter(window.location.hash)
  })
}

window.addEventListener('load', init)


