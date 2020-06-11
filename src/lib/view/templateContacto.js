export const contacto = () => {
  const divContacto = document.createElement("div");
  const viewContacto = `   
  <div id="banner"></div>
  
<div class="container-contacto">

        <div class="contactTittle">
            <h2 class="tituloContact">Contáctanos</h2>
            <p>Envíanos tu duda o sugerencia</p>
        </div>

  <div class="info-ayudamos">
    <p>
        En SocialBeer queremos ayudarte, si necesitas contactarte con nosotros lo puedes hacer llamando al 
        <strong>56 9 1111 1111 de lunes a viernes de 9 a 19hs.</strong> o bien por el formulario y nos 
        pondremos en contacto
    </p>

</div>

<div class="formAyuda">

        <form id="contactform">

            <div id="contactname">
                <label for="name">Nombre Completo:<span class="textForm"></span></label>
                <input type="text" name="name" id="nombre" class="textDatos" placeholder="Nombre y apellido" required>
            </div>

            <div id="contactmail">
                <label for="email">Dirección de Correo Electrónico:<span class="textForm"></span></label>
                <input type="text" name="email" id="email" class="textDatos" placeholder="ej: mail@mail.com" required> 
            </div>

            <div id="contactphone">
                <label for="phone">Teléfono:<span class="textForm"></span></label>
                <input type="tel" name="phone" id="phone" class="textDatos" placeholder=" 56 9 222 22 222">
            </div>


            <div id="contactcity">
                <label for="ciudad">Ciudad<span class="textForm"></span>:</label>
                <input type="text" name="ciudad" id="ciudad" class="textDatos" placeholder="Ej: Santiago" required>
            </div>

            <div id="contactsubject">
                <label for="asunto">Asunto<span class="textForm"></span>:</label>
                <input type="text" name="asunto" id="asunto" class="textDatos" placeholder="Ej: Eventos" required>
            </div>

            <div id="contactAsk">

                <div id ="coment">

                    <label for="coment">Consulta:<span class="textForm"></span></label>
                    <textarea name="coment" id="coment"></textarea>

                </div>

            </div>

            <div id="contactbtn">

                <input type="submit" id="submit" class="btnSend btnInicio" name="submit" value="Enviar">

            </div>

        </form>

    </div>
`
  divContacto.innerHTML = viewContacto;

  return divContacto;
}
