export const comuniBeer = () => {
    const divcomuniBeer = document.createElement("div");
    const viewcomuniBeer = `   
    <div id="banner"></div>
    <div class="comments">
     <h1>Hola mundo</h1>
        <input type="text" id="marcacerveza" placeholder='Marca de tu cerveza' class='form-control'></input>
        <input type="text" id="tipodecerveza" placeholder='Tipo de tu cerveza' class='form-control'></input>
        <input type='text' id="reseña" placeholder='Reseña tu cerveza!' class='form-control'></input>
        <button class='btn-info' id='btn-comment'>Publicar</button>
    </div>
    <div id='rootcerveza'></div>

    `
    divcomuniBeer.innerHTML = viewcomuniBeer;
    const botonComentario = divcomuniBeer.querySelector('#btn-comment');
    botonComentario.addEventListener('click',guardar);
    
    return divcomuniBeer;
  }



    //firestore
    var db = firebase.firestore();

    //Agregar comentarios

    function guardar(){
      var nombre = document.getElementById('marcacerveza').value;
      var apellido = document.getElementById('tipodecerveza').value;
      var edad = document.getElementById('reseña').value;

    db.collection("reseñas").add({
        marcacerveza: marcacerveza,
        tipodecerveza: apellido,
        reseña: reseña
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('marcacerveza').value='';
        document.getElementById('tipodecerveza').value='';
        document.getElementById('reseñacerveza').value='';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

//leer doc
  var table= document.getElementById('table');
db.collection("reseñas").onSnapshot((querySnapshot) => {
  table.innerHTML='';
  querySnapshot.forEach((doc) => { //forEach ciclos que se repiten en el documento para imprimir el dato
      console.log(`${doc.id} => ${doc.data().first}`);
      table.innerHTML += `
      <tr>
      <th scope='row'></th>
      <th>${doc.data().marcacerveza}</th>
      <th>${doc.data().tipodecerveza}</th>
      <th>${doc.data().reseña}</th>
      </tr>
      `

  });
});
 
 //document.querySelector('.btn-info').addEventListener('click',guardar);