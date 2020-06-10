export const eventos = () => {
    const divEventos = document.createElement('div');
  const viewEventos = `   
     <div id="banner">
        <img src="./img/bannerprueba1.png">
    </div>

    <section id="canceled">
         <img src="./img/eventoscancelados.png"> 
    </section> 
`
divEventos.innerHTML = viewEventos; 

  return divEventos;
}


