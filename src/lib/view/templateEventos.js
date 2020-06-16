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
<footer id="footerWeb">Hecho por Francista, Maria José y Katherine</footer>
`
divEventos.innerHTML = viewEventos; 

return divEventos;
}


