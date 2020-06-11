export const registrarse = () => {
  console.log("funciona");
  const divRegistrarse = document.createElement('div');

  const viewRegistrarse = `
  <div class="container" id="containerInicio">
  <div class="form-container sign-in-container">
  <form action="#">
  <h1 id="registrarse">Crea una cuenta</h1>
  <div class="social-container">
    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
  </div>
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Contraseña" />
  <button>¡Unirse!</button>
  </form>
  </div>
  </div >`


  divRegistrarse.innerHTML = viewRegistrarse;
  const btn = divRegistrarse.querySelector('#registrarse');
  btn.addEventListener('click', () => {
    login()
  })
  return divRegistrarse;
};