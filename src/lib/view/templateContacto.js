export const contacto = () => {
    const divContacto = document.createElement("div");
    const viewContacto = `   
    <div id="banner">
    <img class="logoBanner" src="./img/logo.png" alt="Logo SocialBeer"></div>
    
<div class="container-contacto">
     <div class="contact">
        <div class="contactTittle">
            <h2 class="tituloContact">Contáctanos</h2>
            <p>Envíanos tu duda o sugerencia</p>
        </div>
        
        <div class="info-ayudamos">
          <p>En SocialBeer estamos muy felices de leerte, si necesitas contactarte con nosotros, lo puedes hacer mediante este formulario y nos pondremos en contacto
          </p>
        </div>
       
        <div class="formAyuda">
     
            <form id="contactform">
       
                <div id="contactname">
                    <label for="name">Nombre Completo:<span class="textForm"></span></label>
                    <input type="text" name="name" id="nombre" class="inputWeb" placeholder="Nombre y apellido" required>
                </div>
        
                <div id="contactmail">
                    <label for="email">Dirección de Correo Electrónico:<span class="textForm"></span></label>
                    <input type="text" name="email" id="email" class="inputWeb" placeholder="ej: mail@mail.com" required> 
                </div>
        
                <div id="contactphone">
                    <label for="phone">Teléfono:<span class="textForm"></span></label>
                    <input type="tel" name="phone" id="phone" class="inputWeb" placeholder=" 56 9 222 22 222">
                </div>
        
                <div id="contactcity">
                    <label for="ciudad">Ciudad<span class="textForm"></span>:</label>
                    <input type="text" name="ciudad" id="ciudad" class="inputWeb" placeholder="Ej: Santiago" required>
                </div>
        
                <div id="contactsubject">
                    <label for="asunto">Asunto<span class="textForm"></span>:</label>
                    <input type="text" name="asunto" id="asunto" class="inputWeb" placeholder="Ej: Eventos" required>
                </div>
        
                <div id="contactAsk">
                    <div id ="coment">
                        <label for="coment">Consulta:<span class="textForm"></span></label>
                        <input name="coment" class="inputWeb" id="coment"></input>
                    </div>
                </div>
        
                <div id="contactbtn">
                    <input type="submit" id="submitContact" class="btnSend btnWeb" name="submit" value="Enviar">
                </div>
            </form>
        </div>
    </div>
</div>
<footer>
  <div class="container-primFooter"> 
  </div> 
  <div class="container-finFooter">
   
    <div class="logoSocialBeer"> 
      <a href="#home"> 
      <img src="./img/logo.png" alt="Logo del sitio"> 
    </div>
  
    <div class="menuFooter">
      <p class="opmenuFooter">
        <a href="#blog"> Blog </a>
        | &nbsp;
        <a href="#comunibeer"> Comunibeer </a>
        | &nbsp;
        <a href="#dondebeber"> ¿Dónde beber? </a>
        | &nbsp;
        <a href="#eventos"> Eventos </a>
        | &nbsp;
        <a href="#abastecete"> ¡Abastécete! </a>
        | &nbsp;
        <a href="#cerveceriasChilenas"> Cervecerías Chilenas </a>
      </p>
  
      <p class="menuiconsFooter"> 
        <a href="#home"> 
          <i class="fa fa-home iconFooter"> </i> 
        </a>
        <a href="#iniciarsesion"> 
          <i class="fa fa-user iconFooter"></i> 
        </a> 
        <a href="#contacto"> 
          <i class="fas fa-phone iconFooter"></i> 
        </a>
        <a href="https://open.spotify.com/embed/playlist/5vYkdZqio6UOLB1qtYGGVe?si=x3vZxUVlR3WUoaXy_tsg-A" target="_blank"> 
          <i class="fas fa-music iconFooter"></i> 
        </a>
      </p>
  
        <p class="copyrigth">
          ©️ 2020 Social Beer™️  | Todos los derechos reservados.
        </p>
      </div>
      
    </div>
  
  </footer>
  `
    divContacto.innerHTML = viewContacto;
  
    return divContacto;
  }
  