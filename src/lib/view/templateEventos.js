export const eventos = () => {
  const divEventos = document.createElement('div');
const viewEventos = `   
   <div class="banner d-flex justify-content-center">
   <img class="logoBanner" src="./img/logo.png" alt="Logo SocialBeer">
  </div>
  <div class="carousel">
    <div class="carousel-inner">
      <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
      <div class="carousel-item">
        <img src="../src/img/eventos.png" alt="">
      </div>
      <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
      <div class="carousel-item">
        <img src="../src/img/cata.png" alt=""> <href="https://www.google.cl/">
      </div>
      <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
      <div class="carousel-item">
        <img src="../src/img/aprendamos.png" alt="">
      </div>
      <label for="carousel-3" class="carousel-control prev control-1">‹</label>
      <label for="carousel-2" class="carousel-control next control-1">›</label>
      <label for="carousel-1" class="carousel-control prev control-2">‹</label>
      <label for="carousel-3" class="carousel-control next control-2">›</label>
      <label for="carousel-2" class="carousel-control prev control-3">‹</label>
      <label for="carousel-1" class="carousel-control next control-3">›</label>
      <ol class="carousel-indicators">
          <li>
              <label for="carousel-1" class="carousel-bullet">•</label>
          </li>
          <li>
              <label for="carousel-2" class="carousel-bullet">•</label>
          </li>
          <li>
              <label for="carousel-3" class="carousel-bullet">•</label>
          </li>
      </ol>
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
divEventos.innerHTML = viewEventos; 

return divEventos;
}


