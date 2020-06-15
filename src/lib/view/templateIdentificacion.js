export const identification = () => {
  const divIdentification = document.createElement("div");
  const viewIdentification = `   

  <div class="emergente" id="#identificacion">
  
  <h1 class="welcome">Debes ser mayor de edad para poder visitar este sitio web</h1>

  <button class="btnInicio menor" >Tengo menos de 18 años</button>

  <button class="btnInicio mayor" >Soy mayor de edad</button>

  </div> 
`

  divIdentification.innerHTML = viewIdentification;
  return divIdentification;
}

window.onload = initEdad;
    function initEdad(){
        document.getElementById("#identificacion .menor").addEventListener("click",menorEdad);
        document.querySelector(".emergente .mayor").addEventListener("click",mayorEdad);
        document.querySelector(".main-menu").style.display="none";
    }
        
    function menorEdad(){
        location.href="https://google.com";
    }    
    function mayorEdad(){
        root.appendChild(home());
        document.getElementById("#identificacion").style.display="none";
        document.querySelector(".main-menu").style.display="block";
    }