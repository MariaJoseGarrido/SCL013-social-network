

export const identification = () => {
  const divIdentification = document.createElement("div");
  const viewIdentification = `   

  <div class="emergente" id="#identificacion">
  
  <h1 class="welcome">Debes ser mayor de edad para poder visitar este sitio web</h1>

  <button class="btnWeb" menor" id="boton17" >Tengo menos de 18 años</button>

  <button class="btnWeb" mayor" id="boton18" >Soy mayor de edad</button>

  </div> 
`

  divIdentification.innerHTML = viewIdentification;  
  return divIdentification;
}
