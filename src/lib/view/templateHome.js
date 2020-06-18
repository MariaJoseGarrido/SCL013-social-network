export const home = () => {
  const divHome = document.createElement("div");
  const viewHome = `   
  <div class="container-background">
      <div id="background-home">
          <div class="homeContent">
            <hr class="lineHome">
            <h1 id="titleHome" class="welcome">BIENVENIDO A SOCIALBEER</h1>
              <div id="imgLogoHome" class="d-flex justify-content-center"> 
                <img id="logoHome" src="./img/logo.png">  
              </div>
            <h2 id="sloganInicio" class="slogan">Tú red social cervecera</h2>
            <hr class="lineHome">
            <p>Te invitamos a participar en la comunibeer para interactuar con otros amantes de la cerveza</p>
            <button class="btnWeb" href="#registrarse">¡Quiero ser parte!</button>
          </div>
      </div>
      <div class="background-map"> 
        <div class="homeContent">
         <h1>ENCUENTRA TUS LOCALES EN NUESTRO MAPA, ARREGLAR!!!</h1>
        </div>
      </div> 
  </div>  
    `

  divHome.innerHTML = viewHome;
  return divHome;
}



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