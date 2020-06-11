export const home = () => {
  const divHome = document.createElement("div");
  const viewHome = `   
  <div id="banner"></div>
  
  <div class=containerWeb Home>
  <div id="homeContent"><h1 class="welcome">Bienvenido a Socialbeer</h1>
  <h2 class="slogan">Tú red social cervecera</h2>
  <p>Te invitamos a participar en la comunibeer para interactuar con otros amantes de la cerveza</p>
  <button class=btnInicio href="#registrarse">¡Quiero ser parte!</button>
  
  </div></div>`

  divHome.innerHTML = viewHome;
  return divHome;
}

//  <a href="./">ver mayoría de edad</a>

