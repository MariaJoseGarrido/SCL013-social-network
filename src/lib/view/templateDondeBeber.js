export const dondebeber = () => {
  const divDondebeber = document.createElement("div");
  const viewDondebeber = `   
  <div id="banner">
  <img class="logoBanner" src="./img/logo.png" alt="Logo SocialBeer"></div>

  <div class="map"> <iframe src="https://www.google.com/maps/d/embed?mid=18pAv_YAgO_YJ_Cd0-wsPMqWqWvut_tV_" width="640" height="480"></iframe>
  </div>
  <footer id="footerWeb">Hecho por Francista, Maria José y Katherine</footer>
`
  divDondebeber.innerHTML = viewDondebeber;

  return divDondebeber;
}
