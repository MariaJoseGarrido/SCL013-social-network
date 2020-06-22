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
            <a href="#iniciarsesion"><button class="btnWeb">¡Quiero ser parte!</button></a>
          </div>
      </div>
      <div class="background-map"> 
        <div class="homeContent">
         <h1 id="textMapHome">ENCUENTRA TUS LOCALES EN NUESTRO MAPA</h1>
        </div>
      </div> 
  </div> 
  <footer>
  <div class="container-primFooter"> 
  </div> 
  <div class="container-finFooter">
   
    <div class="logoSocialBeer"> 
      <a href="#home"> 
      <img src="./img/logo.png" alt="Logo del sitio"> 
    </div>
  
    <div class="menuFooter">
      <p class="opmenuFooter">
        <a href="#blog"> Blog </a>
        | &nbsp;
        <a href="#comunibeer"> Comunibeer </a>
        | &nbsp;
        <a href="#dondebeber"> ¿Dónde beber? </a>
        | &nbsp;
        <a href="#eventos"> Eventos </a>
        | &nbsp;
        <a href="#abastecete"> ¡Abastécete! </a>
        | &nbsp;
        <a href="#cerveceriasChilenas"> Cervecerías Chilenas </a>
      </p>
  
      <p class="menuiconsFooter"> 
        <a href="#home"> 
          <i class="fa fa-home iconFooter"> </i> 
        </a>
        <a href="#iniciarsesion"> 
          <i class="fa fa-user iconFooter"></i> 
        </a> 
        <a href="#contacto"> 
          <i class="fas fa-phone iconFooter"></i> 
        </a>
        <a href="https://open.spotify.com/embed/playlist/5vYkdZqio6UOLB1qtYGGVe?si=x3vZxUVlR3WUoaXy_tsg-A" target="_blank"> 
          <i class="fas fa-music iconFooter"></i> 
        </a>
      </p>
  
        <p class="copyrigth">
          ©️ 2020 Social Beer™️  | Todos los derechos reservados.
        </p>
      </div>
      
    </div>
  
  </footer> 
    `

  divHome.innerHTML = viewHome;
  return divHome;
}
