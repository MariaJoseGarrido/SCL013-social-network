import { login } from '../index.js';

export const home = () => {
  const divHome = document.createElement("div");
  const viewHome = `   
  <div id="background">
  <div class="containerWeb Home">
  <div id="homeContent">
  <hr class="lineHome">
  <h1 id="titleInicio" class="welcome">BIENVENIDO A SOCIALBEER</h1>
  <div id="imgLogoHome" class="d-flex justify-content-center"> 
  <img id="logoHome" src="./img/logo.png"> 
  </div>
  <h2 id="sloganInicio" class="slogan">Tú red social cervecera</h2>
  <hr class="lineHome">
  <p>Te invitamos a participar en la comunibeer para interactuar con otros amantes de la cerveza</p>
  <button class="btnInicio" href="#registrarse">¡Quiero ser parte!</button>
  </div>
  </div>`

  divHome.innerHTML = viewHome;
  return divHome;
}

// </div>
//   <div> <img id="logoMapa" src="./img/mapa.png">
//   </div> 

//  <a href="./">ver mayoría de edad</a>
