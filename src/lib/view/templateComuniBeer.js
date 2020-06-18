export const comuniBeer = () => {
  const divcomuniBeer = document.createElement("div");
  const viewcomuniBeer = ` 
  <div id="containerWebComunity">
  <h1>Contenedor</h1>
  <header id="banner">
    <img class="logoBanner" src="http://imgfz.com/i/bGv4odX.png" alt="Logo SocialBeer">
  </header>
  <div id="containerSocialNetwork">
    <h1>RedSocial</h1>
    <section id="reviewPostAndComments">
      <h1>Contenedor Reseñas y Post</h1>
      <div id="review">
        <h1>Reseñas</h1>
        <h3>Crea tu reseña cervecera</h3>
          <div id="startAndImage">
            <div class="ec-stars-wrapper">
              <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
              <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
              <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
              <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
              <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
            </div>
            <div id="imageToUpload">
            <input type="file" name="imageToUpload" id="btnImageUpload" class="inputTypeFile">
            </div>
          </div>
        <br>
        <input type="text" id="inputBeerBrand" placeholder='Marca de tu cerveza' class='inputWeb'></input>
        <input type="text" id="inputBeerType" placeholder='Tipo de tu cerveza' class='inputWeb'></input>
        <input type="text" id="inputCountry" placeholder='País' class='inputWeb'></input>
        <textarea type='text' id="inputReviewBeer" placeholder='Reseña de tu cerveza' class='inputWeb review'></textarea>
        <br>
        <button type="submit" class='btnWeb' id='btnReview'>¡Reseñar!</button>
      </div>
      <div id="postAndComments">
        <h1>Post Fijos y Comentarios</h1>
        <div id="reviewPost"
          <h1>Post Reseñas</h1>
          <div id="rootReview"></div>
        </div>
        <div id="comments">
          <h1>Comentarios</h1>
          <textarea type='text' id="inputCommentsBeer" placeholder='Escribe un comentario' class='inputWeb review'></textarea>
          <br>
          <button type="submit" class='btnWeb' id='btnComments'>¡comentar!</button>
        </div>
        <p>Fin Post Fijos y Comentarios</p>
      </div>
      <p>fin contenedor reseñas y post</p>
    </section>
    <section id="profileAndOthers">
      <h1>Contenedor Perfil y Otros</h1>
      <div id="profile">
        <h1>Perfil</h1>
        <div id="rootProfile">
        </div>
      </div>
      <div id="spotify">
        <div class="spotify">
        <iframe src='https://open.spotify.com/embed/playlist/5vYkdZqio6UOLB1qtYGGVe?si=x3vZxUVlR3WUoaXy_tsg-A' width="300" height="380" frameborder='0' allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      </div>
      <p>Fin Contenedor Perfil y Otros</p>
    </section>
    <p>Fin contenedor RedSocial</p>
  </div>
  <footer id="socialNetworkFooter">
    <h1>pie de página</h1>
  </footer>
  <p>fin contenedor web</p>
  </div>
  `
  divcomuniBeer.innerHTML = viewcomuniBeer;
  const btnReviewBeer = divcomuniBeer.querySelector('#btnReview');
  btnReviewBeer.addEventListener('click', guardar);
  


  //Inicia firestore
  var db = firebase.firestore();


  //Agregar comentarios

  function guardar(){
    let beerBrand = document.getElementById('inputBeerBrand').value;
    let beerType = document.getElementById('inputBeerType').value;
    let beerCountry = document.getElementById('inputCountry').value;
    let beerReview = document.getElementById('inputReviewBeer').value;
    let beerImg = document.getElementById('btnImageUpload').value;

  db.collection("resenas").add({
      marcaCerveza: beerBrand,
      tipoCerveza: beerType,
      paisCerveza: beerCountry,
      resenaCerveza: beerReview,
      imagenCerveza: beerImg
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('inputBeerBrand').value='';
      document.getElementById('inputBeerType').value='';
      document.getElementById('inputCountry').value='';
      document.getElementById('inputReviewBeer').value='';
      document.getElementById('btnImageUpload').value='';
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }

//leer doc
let divReview = document.getElementById('rootReview');
db.collection("resenas").onSnapshot((querySnapshot) => {
    divReview.innerHTML='';
    querySnapshot.forEach((doc) => { //forEach ciclos que se repiten en el documento para imprimir el dato
    console.log(`${doc.id} => ${doc.data().marcaCerveza}`);
    divReview.innerHTML += `
    <section id="textReview">
    <p>${doc.id}</p>
    <img ${doc.data().imagenCerveza}>
    <h4>${doc.data().marcaCerveza}</h4>
    <h5>${doc.data().tipoCerveza}</h5>
    <h5>${doc.data().paísCerveza}</h5>
    <p>${doc.data().resenaCerveza}</p>
    </section>
    `
  });
})

return divcomuniBeer;

};



//document.querySelector('.btn-info').addEventListener('click',guardar);