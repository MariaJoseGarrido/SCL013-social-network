export const dondebeber = () => {
  const divDondebeber = document.createElement("div");
  const viewDondebeber = `   
  <div id="banner"></div>

  <div class="contentMap">
  <div class="map"> 
  <iframe src="https://www.google.com/maps/d/embed?mid=18pAv_YAgO_YJ_Cd0-wsPMqWqWvut_tV_" width="640" height="480">
  </iframe>

  <div class="infoDondeBeber">

    <h1 class='titleInicio'> Guía de mapa </h1>
    
    <div class="iconografiaMap">
      <img class="iconMap" src="https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1879-stein-beer_4x.png&highlight=ff000000,0288D1&scale=2.0">
      </img>
      <span>Botilleria</span>
    </div>
   
      <div class="iconografiaMap">
      <img class="iconMap" src="https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1879-stein-beer_4x.png&highlight=ff000000,E65100&scale=2.0">
      </img>
      <span>Bares</span>
    </div>

      <div class="iconografiaMap">
      <img class="iconMap" src="https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1879-stein-beer_4x.png&highlight=ff000000,F9A825&scale=2.0">
      </img>
      <span>Escuelas</span>
    </div>

    </div>

    </div>


  </div>
  </div>
`
  divDondebeber.innerHTML = viewDondebeber;

  return divDondebeber;
}
