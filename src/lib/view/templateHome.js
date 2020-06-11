export const home = () => {
  const divHome = document.createElement("div");
  const viewHome = `   
  <div id="background">
  <div class=containerWeb Home>
  <div id="homeContent"><h1 id="titleInicio" class="welcome">BIENVENIDO A <br> SOCIALBEER</h1>
  <h2 id="sloganInicio" class="slogan">Tú red social cervecera</h2>
  <p>Te invitamos a participar en la comunibeer para interactuar con otros amantes de la cerveza</p>
  <button class=btnInicio href="#registrarse">¡Quiero ser parte!</button>
  <div> <img id="logoInicio" src="./img/logo.png"> </div>
  
  </div></div></div>`

  divHome.innerHTML = viewHome;
  return divHome;
}

//  <a href="./">ver mayoría de edad</a>

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
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Contraseña" />
  <button>¡Unirse!</button>
  </form>
  </div>
  </div >`


  divRegistrarse.innerHTML = viewRegistrarse;
  const btn = divRegistrarse.querySelector('#registrarse');
  btn.addEventListener('click', () => {
    login()
  })
  return divRegistrarse;
};