export const comuniBeer = () => {
  const divcomuniBeer = document.createElement("div");
  const viewcomuniBeer = ` 
  <div id="containerComunity">  
    <div id="banner">
      <img class="logoBanner" src="./img/logo.png" alt="Logo SocialBeer"></div>
      <div class="d-flex align-items-center justify-content-center">
        <div class="comments">
          <div class="textComments">
          <h3 class="titleInicio">Crea tu reseña cervecera</h3>
          <div class="ec-stars-wrapper">
          <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
          <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
          <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
          <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
          <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
          </div>
          <br>
          <input type="text" id="marcaC" placeholder='Marca de tu cerveza' class='inputInicio'></input>
          <input type="text" id="tipoC" placeholder='Tipo de tu cerveza' class='inputInicio'></input>
          <textarea type='text' id="textoC" placeholder='Reseña de tu cerveza' class='inputInicio reseña'></textarea>
          <br>
          <button class='btnInicio' id='btn-comment'>Comentar!</button>
        </div>
      </div>
    </div>
  </div>
  <div class='table' id="table">
    <head>
      <tr>
        <th scope='col'>Id</th>
        <th scope='col'>Marca Cerveza</th>
        <th scope='col'>Tipo Cerveza</th>
        <th scope='col'>Reseña Cerveza</th>
      </tr>
    </head>
  </div>
  <div>
  <footer id="footerWeb">Hecho por Francista, Maria José y Katherine</footer>
  </div>
  `
  divcomuniBeer.innerHTML = viewcomuniBeer;
  const botonComentario = divcomuniBeer.querySelector('#btn-comment');
  botonComentario.addEventListener('click', guardar);
  
  return divcomuniBeer;


  //Inicia firestore
  let db = firebase.firestore();

  //Agregar comentarios

  function guardar(){
    let marcaC = document.getElementById('marcaC').value;
    let tipoC = document.getElementById('tipoC').value;
    let textoC = document.getElementById('textoC').value;

  db.collection("reseñas").add({
      marcaCerveza: marcaC,
      tipoCerveza: tipoC,
      textoReseña: textoC
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('marcaC').value='';
      document.getElementById('tipoC').value='';
      document.getElementById('textoC').value='';
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }

//leer doc
let table = document.getElementById('table');
db.collection("reseñas").onSnapshot((querySnapshot) => {
table.innerHTML='';
querySnapshot.forEach((doc) => { //forEach ciclos que se repiten en el documento para imprimir el dato
    console.log(`${doc.id} => ${doc.data().marcaCerveza}`);
    table.innerHTML += `
    <tr>
    <th scope='row'>${doc.id}</th>
    <th>${doc.data().marcaCerveza}</th>
    <th>${doc.data().tipoCerveza}</th>
    <th>${doc.data().textoReseña}</th>
    </tr>
    `
} );
});
}

//document.querySelector('.btn-info').addEventListener('click',guardar);