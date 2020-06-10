export const contacto = () => {
  const divContacto = document.createElement("div");
  const viewContacto = `   
  <div class="info-ayudamos">

    <p>

        En SocialBeer queremos ayudarte, si necesitas contactarte con nosotros lo puedes hacer llamando al 
        <strong>    56 2 1111 1111 de lunes a viernes de 9 a 19hs.</strong> o bien por el formulario y nos 
        pondremos en contacto

    </p>

</div>

<div class="formAyuda">

        <form id="contactform">

            <div class="contactTittle">

                <h2 class="tituloContact">Contáctanos</h2>
                <p>Envíanos tu duda o sugerencia</p>

            </div>

            <div id="contactname">

                <label for="name">Nombre Completo:<span class="red-mcc">*</span></label>
                <input type="text" name="name" id="nombre" class="" placeholder="Nombre Completo">

            </div>

            <div id="contactmail">

                <label for="email">Dirección de Correo Electrónico:<span class="red-mcc">*</span></label>
                <input type="text" name="email" id="email" class="" placeholder="ej: mail@mail.com">

            </div>

            <div id="contactphone">

                <label for="phone">Teléfono:<span class="red-mcc">*</span></label>
                <input type="tel" name="phone" id="phone" class="" placeholder=" 56 9 222 22 222">

            </div>


            <div id="contactcity">

                <label for="ciudad">Ciudad<span class="red-mcc">*</span>:</label>
                <input type="text" name="ciudad" id="ciudad" class="" placeholder="Ej: Santiago" required>

            </div>

            <div id="contactsubject">

                <!--<label for="ci_subject" class="medium-4 ">Asunto<span class="ci_red">*</span>:</label>
                <input type="text" name="ci_subject" id="ci_subject" class="medium-8 " placeholder="Ingrese su asunto">-->
                <label for="asunto">Asunto<span class="red-mcc">*</span>:</label>
                <input type="text" name="asunto" id="asunto" class="" placeholder="Ingrese su asunto" required>

            </div>

            <div id="contactask">

                <div coment">

                    <label for="coment">Consulta:<span class="red-mcc">*</span></label>
                    <textarea name="coment" id="coment" cols="50" rows="5"></textarea>

                </div>

                <div class="small-12 large-3 columns max">

                    <p>Máximo 700 caracteres / <span class="red-mcc">*</span>Campos Obligatorio </p>

                </div>

            </div>

            <div>&nbsp;</div>

            <div id="contactbtn"">

                <input type="submit" id="submit" class="btnSend radius expand" name="submit" value="Enviar">

            </div>

        </form>

    </div>

    <div id="contactok" class="reveal-modal" data-reveal aria-labelledby="AprobadoTitle" aria-hidden="true" role="dialog" data-reveal-ajax="true">

        <h2 id="AprobadoTitle">Gracias por escribirnos</h2>
        <p class="lead">Sus datos han sido enviados.</p>
        <a class="close-reveal-modal" aria-label="Close">&#215;</a>

    </div>

    <div id="contacterror" class="reveal-modal" data-reveal aria-labelledby="ErrorTitle" aria-hidden="true" role="dialog" data-reveal-ajax="true">

        <h2 id="ErrorTitle">El formulario no ha podido registrar tus datos</h2>
        <p class="lead">Pruebe completando nuevamente en todos los campos correspondientes de forma correcta.</p>
        <p>De lo contrario revise su conexión a internet e inténtelo más tarde.</p>
        <a class="close-reveal-modal" aria-label="Close">&#215;</a>
        
    </div>
`
  divContacto.innerHTML = viewContacto;

  return divContacto;
}
