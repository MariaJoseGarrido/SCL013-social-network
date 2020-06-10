export const comuniBeer = () => {
    const divcomuniBeer = document.createElement("div");
    const viewcomuniBeer = `   
    <div id="banner"></div>
    <div class="comments">
     <h1>Hola mundo</h1>
        <input type="text" id="nombre" placeholder='nombre' class='form-control'></input>
        <input type="text" id="apellido" placeholder='apellido' class='form-control'></input>
        <input type='text' id="edad" placeholder='edad' class='form-control'></input>
        <button class='btn-info' id='btn-comment' onclick='guardar()'>Comentar!</button>
    </div>

    <div>
  <table class='table'>
    <head>
      <tr>
        <th scope='col'>Id</th>
        <th scope='col'>First</th>
        <th scope='col'>last</th>
        <th scope='col'>born</th>
      </tr>
    </head>
    <body id='tabla'>
    </body>
  </table>
</div>
    `
  // document.getElementById('#btn-comment').addEventListener('click',guardar);
    divcomuniBeer.innerHTML = viewcomuniBeer;
    return divcomuniBeer;
  }


    //firestore
    var db = firebase.firestore();

    //Agregar comentarios

    function guardar(){
      var nombre = document.getElementById('nombre').value;
      var apellido = document.getElementById('apellido').value;
      var edad = document.getElementById('edad').value;

    db.collection("users").add({
        first: nombre,
        last: apellido,
        born: edad
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('nombre').value='';
        document.getElementById('apellido').value='';
        document.getElementById('edad').value='';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

//leer doc
  var tabla= document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {
  tabla.innerHTML='';
  querySnapshot.forEach((doc) => { //forEach ciclos que se repiten en el documento para imprimir el dato
      console.log(`${doc.id} => ${doc.data().first}`);
      tabla.innerHTML += `
      <tr>
      <th scope='row'>${doc.id}</th>
      <th>${doc.data().first}</th>
      <th>${doc.data().last}</th>
      <th>${doc.data().born}</th>
      </tr>
      `

  });
});
 

// document.querySelector('.btn-info').addEventListener('click',guardar);