export const comuniBeer = () => {
    const divcomuniBeer = document.createElement("div");
    const viewcomuniBeer = `   
    <div id="banner"></div>
    <div class="comments">
     <h1 class="titleInicio">Crea tu reseña cervecera</h1>
        <input type="text" id="marcaC" placeholder='Marca de tu cerveza' class='inputInicio'></input>
        <input type="text" id="tipoC" placeholder='Tipo de tu cerveza' class='inputInicio'></input>
        <textarea type='text' id="textoC" placeholder='Reseña de tu cerveza' class='inputInicio reseña'></textarea>
        <button class='btnInicio' id='btn-comment'>Comentar!</button>
        <body id='tabla'>
        </body>
    </div>
    `
    divcomuniBeer.innerHTML = viewcomuniBeer;
    const botonComentario = divcomuniBeer.querySelector('#btn-comment');
    botonComentario.addEventListener('click', guardar);
    
    return divcomuniBeer;
  }

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
 
 //document.querySelector('.btn-info').addEventListener('click',guardar);