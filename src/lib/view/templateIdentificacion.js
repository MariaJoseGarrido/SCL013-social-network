export const identification = () => {
  const divIdentification = document.createElement("div");
  const viewIdentification = `   
  <div id="banner"></div>
  <div id="identificationContainer">
  <div id="indetificationText">
    <figure></figure>
    <h1 class="welcome">Bienvenido a Socialbeer</h1>
    <h3>¿Eres mayor de edad?</h3>
    <div id="btnYesOrNot">
      <a href="#home">Sí</a>
      <a href="#">No</a>
      <p> Al confirmar ser mayor de edad manifiesta su conformidad con los términos y condiciones </p>
      <figure id="imgLogo">
        <img src="../src/img/logo.png" alt="">
      </figure>
    </div>
  </div>
</div>`

  divIdentification.innerHTML = viewIdentification;
  return divIdentification;
}