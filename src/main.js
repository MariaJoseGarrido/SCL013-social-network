import { myFunction } from './lib/index.js';
import { changeRouter } from './lib/router.js';
import { identification } from './lib/view/templateIdentificacion.js'
import { menu } from './lib/view/templateMenu.js';
import { home, registrarse } from './lib/view/templateHome.js';
// import { registrarse } from './lib/view/templateHome.js';
import { iniciarSesion } from './lib/view/templateIniciarSesion.js';
import { blog } from './lib/view/templateBlog.js';
import { comuniBeer } from './lib/view/templateComuniBeer.js';
import { dondebeber } from './lib/view/templateDondeBeber.js';
import { eventos } from './lib/view/templateEventos.js';
import { abastecete } from './lib/view/templateAbastecete.js';
import { cerveceriasChilenas } from './lib/view/templateCerveceriaschilenas.js';


const init = () => {
  document.getElementById('root').innerHTML = menu()
  window.addEventListener('hashchange', () => {
    myFunction();
    console.log(window.location.hash);
    changeRouter(window.location.hash)
  })
}

window.addEventListener('load', init)

 
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