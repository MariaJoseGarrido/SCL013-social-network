export const dondebeber = () => {
  const divDondebeber = document.createElement("div");
  const viewDondebeber = `   
  <div id="banner"></div>

  <h1>¡Ups! Lo sentimos, no puedes navegar dentro de nuestro sitio</h1>
  
`
  divDondebeber.innerHTML = viewDondebeber;

  return divDondebeber;
}
