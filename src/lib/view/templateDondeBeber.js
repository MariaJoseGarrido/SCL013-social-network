export const dondebeber = () => {
  const divDondebeber = document.createElement("div");
  const viewDondebeber = `   
  <div id="banner"></div>

  <div class="map"> <iframe src="https://www.google.com/maps/d/embed?mid=18pAv_YAgO_YJ_Cd0-wsPMqWqWvut_tV_" width="640" height="480"></iframe>
  </div>
`
  divDondebeber.innerHTML = viewDondebeber;

  return divDondebeber;
}
