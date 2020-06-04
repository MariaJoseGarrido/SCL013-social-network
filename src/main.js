import { myFunction } from './lib/index.js';
import { menu } from './lib/view/templateMenu.js';
import { home } from './lib/view/TemplateHome.js';
import { changeRouter } from './lib/router.js';
import { cerveceriasChilenas } from './lib/view/templateCerveceriaschilenas.js';
import { abastecete } from './lib/view/templateAbastecete.js';
import { eventos } from './lib/view/templateEventos.js';
import { dondebeber } from './lib/view/templateDondeBeber.js';

const init = () => {
  document.getElementById('root').innerHTML = menu()
  window.addEventListener('hashchange', () => {
    myFunction();
    console.log(window.location.hash);
    changeRouter(window.location.hash)
  })
}

window.addEventListener('load', init)