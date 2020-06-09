export const home = () => {
  const divHome = document.createElement("div");
  const viewHome = `   
  <div id="banner"></div>
  <a href="./">ver mayoría de edad</a>
  

  <div id="homeContent"><h1 class="welcome">Bienvenido a Socialbeer</h1>
  <h2 class="slogan">Tú red social cervecera</h2>
  <p>Te invitamos a participar en la comunibeer para interactuar con otros amantes de la cerveza</p>
  <button class=btnInicio>¡Quiero ser parte!</button>
  </div>`

  divHome.innerHTML = viewHome;
  return divHome;
}

export const registrarse = () => {
  const divRegistrarse = document.createElement('div');

  const viewRegistrarse = `
  <div class="container" id="containerInicio">
  <div class="form-container sign-in-container">
  <form action="#">
  <h1>Create Account</h1>
  <div class="social-container">
    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
  </div>
  <span>or use your cuenta for registration</span>
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Contraseña" />
  <button>Crear cuenta</button>
</form>
</div>
</div >`


  divRegistrarse.innerHTML = viewRegistrarse;
  const btn = divRegistrarse.querySelector('#register');
  btn.addEventListener('click', () => {
    login()
  })
  return divRegistrarse;
};