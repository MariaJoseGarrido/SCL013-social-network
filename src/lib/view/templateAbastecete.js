export const abastecete = () => {
    const divAbastecete = document.createElement("div");
    divAbastecete.className="backgroundcolor";
    const viewAbastecete = `
   
      <div id="banner">
      <img class="logoBanner" src="./img/logo.png" alt="Logo SocialBeer">
      </div>
      <section class="shopOnline">
      <div class="shopOnline-card">
          <div class="shopOnline-card-img">
            <div class="shopOnline-card-img-content">
              <a href="https://www.beervana.cl/" target="_blank"> 
              <img class="img-fluid" src="./img/logo-logo-beervana.png">
              </a>
            </div>
          </div>
          <div class="shopOnline-card-text">
          <p>Tienda especializada que cuenta con la más amplia variedad de cervezas artesanales en todo Chile. 
          Desde las mejores cervezas artesanales nacionales hasta las más exclusivas importadass de Estados Unidos y 
          Europa que no encontrarás en otro lado. Fundada en el 2013 por dos gringos, Ben Wood y Perry Hirsch, 
          quienes solo deseaban poder tomar las mejores cervezas artesanales de su tierra natal, 
          Beervana se ha convertido en el punto de referencia para el mundo cervecero chileno. 
          En su local puedes comprar cervezas para beber ahí mismo, comprar para llevar, pedir en línea con retiro 
          en entienda, o con despacho a domicilio.</p>
          <a href="https://www.beervana.cl/" target="_blank">
          <button class='btnWeb' id='btnComments'>Ir al sitio web</button>
          </div>
      </div>
  
  
          <div class="shopOnline-card">
          <div class="shopOnline-card-img">
              <div class="shopOnline-card-img-content">
              <a href="https://www.casadelacerveza.cl/" target="_blank"> 
                  <img class="img-fluid" src="./img/Casa-de-La-Cerveza.png"  >
              </a>
              </div>
          </div>
          <div class="shopOnline-card-text">
              <p>Casa de la Cerveza nace el año 2017 como una tienda online, parte de la cervecera multinacional ABInBev, 
              con el sueño de ofrecer al mercado chileno las mejores cervezas del mundo, a un precio justo y de la manera más 
              conveniente. Para cumplirlo, se formaron acuerdos con las cervecerías más famosas y premiadas de Europa, 
              Norteamérica y Sudamérica, que les permite tener una gran cantidad de sabores y estilos, para satisfacer 
              todos los gustos y paladares de la comunidad. Hoy en día, ofrecen una amplia gama de cervezas, con más de 100 variedades.</p>
              <a href="https://www.casadelacerveza.cl/" target="_blank">
              <button class='btnWeb' id='btnComments'>Ir al sitio web</button>
              </div>
          </div>
  
          <div class="shopOnline-card">
          <div class="shopOnline-card-img">
              <div class="shopOnline-card-img-content">
              <a href="https://www.beershopscl.cl/" target="_blank"> 
                  <img class="img-fluid" src="./img/logo-beershop.png">
              </a>
              </div>
          </div>
          <div class="shopOnline-card-text">
              <p>Si bien el nombre de esta web es "tienda de la cerveza", en su página web podemos encontrar variedades
              de alcoholes e incluso cristalería de variadas marcas de cervezas, pero es en su catálogo cervecero donde esta 
              su fuerte, abundan tanto las marcas nacionales como las internacionales, ofreciendo una variedad contundente hasta para el 
              más mañoso, cuentan con tienda física ubicada en la comuna de La Cisterna donde puedes retirar tu pedido, o pedirlo directo
              a tu domicilio.</p>
              <a href="https://www.beershopscl.cl/" target="_blank">
              <button class='btnWeb' id='btnComments'>Ir al sitio web</button>
          </div>
          </div>
  
          <div class="shopOnline-card">
              <div class="shopOnline-card-img">
              <div class="shopOnline-card-img-content">
              <a href="https://chilecervezas.com/" target="_blank"> 
                  <img class="img-fluid" src="./img/logo_chilecervezas.png">
              </a>
              </div>
          </div>
          <div class="shopOnline-card-text">
              <p>Aquí se dedican a la cerveza chilena artesanal en un 100%, poseen una selección limitada de productores nacionales,
              separados por ciudad de producción, por el momento el formato de compra es por 12 unidades, esperamos que en un futuro 
              amplien su catálogo y sus ofertas.</p>
              <a href="https://chilecervezas.com/" target="_blank">
              <button class='btnWeb' id='btnComments'>Ir al sitio web</button>
           </div>
          </div>
  
          <div class="shopOnline-card">
          <div class="shopOnline-card-img">
              <div class="shopOnline-card-img-content">
              <a href="https://www.beerkings.cl/" target="_blank"> 
                  <img class="img-fluid" src="./img/Logo-beerkings.png">
              </a>
              </div>
          </div>
          <div class="shopOnline-card-text">
              <p>Importan y distribuyen cervezas desde el año 2012. Siempre cuidando las 3b. Atienden bares, 
              restaurantes, hoteles, botillerías, distribuidoras y clientes a lo largo del País. El formato de venta 
              de sus productos es por 6 unidades o por cajas de 
              20 unidades, con marcas más bien limitadas y específicas, también tienen una colección de souvenirs y regalos.</p>
              <a href="https://www.beerkings.cl/" target="_blank">
              <button class='btnWeb' id='btnComments'>Ir al sitio web</button>
              </div>
          </div>
  
          <div class="shopOnline-card">
              <div class="shopOnline-card-img">
              <div class="shopOnline-card-img-content">
                  <a href="https://www.delibeer.cl/" target="_blank"> 
                  <img class="img-fluid" src="./img/logo_delibeer.png"  >
                  </a>
              </div>
              </div>
              <div class="shopOnline-card-text">
              <p>Venden uno que otro vino, pero su especialidad es la cerveceza y el merchandising asociados a ellas, cuentan
              con una enorme (y excelente) variedad de estilos y marcas, nacionales e internacionales. Próximamente inagurarán una suscripción mensual,
              trimestral o semestral con 12 cervezas para degustar. Puedes incluso pedir que te atiendan la barra (que ellos traen) 
              para tus eventos, servicio completo.</p>
              <a href="https://www.delibeer.cl/" target="_blank">
              <button class='btnWeb' id='btnComments'>Ir al sitio web</button>
              </div>
          </div>
  
          <div class="shopOnline-card">
          <div class="shopOnline-card-img">
              <div class="shopOnline-card-img-content">
              <a href="https://www.booz.cl/catalogo/cervezas" target="_blank"> 
                  <img class="img-fluid" src="./img/logo-booz.png">
              </a>
              </div>
          </div>
          <div class="shopOnline-card-text">
              <p>Si bien esta web se dedica a la venta de alcohol en general, tienen una muy buena selección de cervezas
              con buenos precios, se debe comprar en packs de 24 o 12 unidades, cuentan con cervezas nacionales e internacionales</p>
              <a href="https://www.booz.cl/catalogo/cervezas" target="_blank">
              <button class='btnWeb' id='btnComments'>Ir al sitio web</button>
              </div>
          </div>
  
      <div class="shopOnline-card">
          <div class="shopOnline-card-img">
          <div class="shopOnline-card-img-content">
              <a href="https://www.clubdecervezas.cl/" target="_blank"> 
              <img class="img-fluid" src="./img/clubcervezas.png">
              </a>
          </div>
          </div>
          <div class="shopOnline-card-text">
          <p>Este club está ubicado en la quinta región, Viña del Mar y Quillota, para ser más específicos, donde están
          ubicados sus restaurantes, pero realizan despacho a todo Chile. Cuentan con cervezas nacionales, pero su fuerte 
          son las internacionales, donde las marcas estadounidenses y belgas son las más destacadas. Se puede comprar por unidad
          y por pack. </p>
          <a href="https://www.clubdecervezas.cl/" target="_blank">
          <button class='btnWeb' id='btnComments'>Ir al sitio web</button>
          </div>
      </div>
  
  
      <div class="shopOnline-card">
      <div class="shopOnline-card-img">
          <div class="shopOnline-card-img-content">
          <a href="https://www.javas.cl/" target="_blank">  
              <img class="img-fluid" src="./img/logo-javas.png">
          </a>
          </div>
      </div>
      <div class="shopOnline-card-text">
          <p>No solo venden cervezas, si no que también puedes unirte al club cervecero y disfrutar de forma mensual, directo
          a la puerta de tu casa 6 variedades de cervezas (3 nacionales y 3 internacionales). Su catálogo es impresionante y muy variado en cuanto a 
          marcas y estilos. Debido a la ubicación del Java's (5ta región) el envio se ve afectado por el peso de la caja, así
          que asegúrate de comunicarte con ellos antes de realizar un pedido, por otro lado, la suscripción al club sí es posible
          si vives en santiago, consulta por el precio de despacho.</p>
          <a href="https://www.javas.cl/" target="_blank">
          <button class='btnWeb' id='btnComments'>Ir al sitio web</button>
      </div>
      </div>
  
      <div class="shopOnline-card">
      <div class="shopOnline-card-img">
          <div class="shopOnline-card-img-content">
          <a href="https://www.lagerhaus.cl/" target="_blank"> 
              <img class="img-fluid" src="./img/logo-lagerhaus.jpeg">
          </a>
          </div>
      </div>
      <div class="shopOnline-card-text">
          <p>Dicen ser especialista en cerveza artesanal, y no es para menos ya que si bien cuentan con una selección 
          internacional, su foco está siempre en promover la cerveza nacional, ofreciendo en sus restaurantes a los clientes 
          cervezas de todos los rincones del país. En sus locales cuentan con al menos 35 líneas, lo que los convierte
           en los bares con mayor variedad de cerveza en barril del país. Su formato de venta es diferente a los demás,
           ya que ellos llenan growlers o botellas boca ancha con la cerveza a elección.</p>
           <a href="https://www.lagerhaus.cl/" target="_blank">
           <button class='btnWeb' id='btnComments'>Ir al sitio web</button>
      </div>
      </div>
  
      <div class="shopOnline-card">
      <div class="shopOnline-card-img">
      <div class="shopOnline-card-img-content">
          <a href="https://artebeer.cl/" target="_blank"> 
          <img class="img-fluid" src="./img/arte.png" >
          </a>
      </div>
      </div>
      <div class="shopOnline-card-text">
      <p>Aquí tenemos otro club cervecero con un buen catálogo de cervezas nacionales, consta con 3 tipos de membresía, 
      cada cual viene con un determinado número de cervezas mensuales (6,12 o 18), invitaciones a degustaciones,
      catas guiadas de cervezas y beneficios en bares y restaurantes. Si la suscripción no es lo tuyo
      también puedes comprar tus cervezas en packs o unidades.</p>
      <a href="https://artebeer.cl/" target="_blank">
      <button class='btnWeb' id='btnComments'>Ir al sitio web</button>
      </div>
      </div>
  
      <div class="shopOnline-card">
      <div class="shopOnline-card-img">
      <div class="shopOnline-card-img-content">
          <a href="https://www.brindemos.cl/collection/cervezas?order=price&way=ASC&limit=9&page=1" target="_blank"> 
          <img class="img-fluid" src="./img/logo-brindemos.png">
          </a>
      </div>
      </div>
      <div class="shopOnline-card-text">
      <p>Fundada en el año 2018,con una tienda física ubicada en la comuna de Providencia, cuentan con una amplia gama de licores
      y vinos, en cuanto a las cervezas, si bien si catálogo no es extenso, de lo bueno poco y destacan marcas internacionales
      como "Founders" y nacionales como "granizo". En su local puedes encontrar merch asociado a marcas de cervezas.</p>
      <a href="https://www.brindemos.cl/collection/cervezas?order=price&way=ASC&limit=9&page=1" target="_blank">
      <button class='btnWeb' id='btnComments'>Ir al sitio web</button>
      </div>
      </div>
  
      <div class="shopOnline-card">
      <div class="shopOnline-card-img">
      <div class="shopOnline-card-img-content">
          <a href="https://www.beersquare.com" target="_blank"> 
          <img class="img-fluid" src="./img/logo-beersquare.jpg" >
          </a>
      </div>
      </div>
      <div class="shopOnline-card-text">
      <p>Fundada el 2015 en el centro comercial "Omnium" en la comunda de Las Conder, quí tenemos una selección de las mejores 
      cervezas de Chile y el mundo. las tienen en botellas, latas, packs, promociones y merch.
      A veces sus precios están por encima de lo que puedes encontrar en otros lugares, pero se preocupan de tener buenas
      ofertas.</p>
      <a href="https://www.beersquare.com" target="_blank">
      <button class='btnWeb' id='btnComments'> </a>
      Ir al sitio web</button> 
      </div>
      </div>

      </section>

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
    
      `;
  
    divAbastecete.innerHTML = viewAbastecete;
  
    return divAbastecete;
  };
  