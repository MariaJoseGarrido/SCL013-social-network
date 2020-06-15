export const register = () => {

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then( ( ) => {
    
  } ) 
  .catch( (error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  }); 

} 


