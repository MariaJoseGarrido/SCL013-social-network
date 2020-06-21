
export const loginUser = (email,password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(){
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        if(user.emailVerified === true){
          window.location.hash = '#comunibeer';         
        }else{
          alert("Se necesita verificar email para ingresar");
          logOut();
        }
      }                  
    })
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/wrong-password') {
      alert('Lo siento, tu contraseña es incorrecta');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    document.getElementById('btnEntrar').disabled = false;
    // [END_EXCLUDE]
  });
}

export const createUser = (email,password) => {
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(function(user){
                emailVerification(); //agregar nombre a user
                alert("Verifica tu correo para acceder al sitio");
                logOut();
              })
              .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(error.message);
              });   
}

export const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log('user', user)
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log('error', errorMessage)
    // ...
  });
}

export const emailVerification = () => {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
}

export const logOut = () => {
firebase.auth().signOut()
      .then(function (){
          console.log("salir");
          window.location.hash = '#iniciarsesion';
      })
      .catch(function(error){
          console.log(error);
      });
}

export const sendPasswordReset = () => {
  var email = document.getElementById('emailInicio').value;
  // [START sendpasswordemail]
  firebase.auth().sendPasswordResetEmail(email).then(function() {
    // Password Reset Email Sent!
    // [START_EXCLUDE]
    alert('Se ha enviado un correo para restablecer contraseña, ¡yey!');
    // [END_EXCLUDE]
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  }); 
  // [END sendpasswordemail];
}

export const currentUser = () => {
  return firebase.auth().currentUser
}; //

export const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

    } else {
    
    }
});
};

export const postLike = (id) => {
  const user = firebase.auth().currentUser;
  console.log(id)

  // de la collection post traeme el documento con el ID, "id"
  firebase.firestore().collection('resenas').doc(id).get()
  .then((respuesta) => {
    const post = respuesta.data();
    if (post.likes == null || post.likes == '') {
      post.likes = [];
      // eslint-disable-next-line no-console
      console.log('entró al like vacio');
    }

    if (post.likes.includes(user.uid)) {
      for (let i = 0; i < post.likes.length; i++) {
        if (post.likes[i] === user.uid) { // verifica si ya el usuario está en el array
          post.likes.splice(i, 1); // sentencia para eliminar un elemento de un array
          firebase.firestore().collection('resenas').doc(id).update({likes: post.likes})
        }}   
        } else {
          post.likes.push(user.uid);
          firebase.firestore().collection('resenas').doc(id).update({likes: post.likes})
    }
  })
  .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error.message);
    });
}