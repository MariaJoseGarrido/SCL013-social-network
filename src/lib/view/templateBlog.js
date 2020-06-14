export const blog = () => {
  const divBlog = document.createElement('div');
  const viewBlog = `
<div id="banner">
    <img src="./img/bannerprueba1.png">
</div>
<section id="entranceContainer">
  <article class="entrance4">
    <header>
    <h2>La diferencia entre lager y ale, explicada</h2>
    <time datetime="2020-05-27">Hace 1 día</time>
    </header>
    <p>Cuando se trata de cervezas, no hay más palabras que se repitan más como "ale"y "lager". Esto no es extraño, ya que todas la cervezas caen en al menos una de estas categorías, pero muchos de nosotros hemos ido por un camino de mala educación...</p>
    <a href="#post4">Leer más...</a>
    <footer>Escrito por La Fran</footer>
  </article>

  <article class="entrance3">
    <header>
    <h2>Título de mi tercer post</h2>
    <time datetime="2014-10-01">Hace 1 semana</time>
    </header>
    <p>Un post...</p>
    <a href="#post3">Leer más...</a>
    <footer>Escrito por La Kote</footer>
   </article>

   <article class="entrance2">
    <header>
    <h2>Título de mi segundo post</h2>
    <time datetime="2014-10-05">Hace 3 días</time>
    </header>
    <p>Un post</p>
    <a href="#post2">Leer más...</a>
    <footer>Escrito por La Belén</footer>
    </article>

    <article class="entrance1">
     <header>
     <h2>La cerveza: sinónimo de felicidad</h2>
     <time datetime="2020-02-17">Hace 4 meses</time>
     </header>
     <p>Tomarse una cerveza no deja de ser una opción perfecta para experimentar grandes sensaciones. Sin embargo, incluso si eres un fanático de esta bebida, quizá ignores por qué cada sorbo te genera tan positivas sensaciones...</p>
     <a href="#post1">Leer más...</a>
     <footer>Escrito por Katherine</footer>
    </article>
    </section>
  
    <section class="postContainer">
      <div id="post1"></div>

      <div id="post2"></div>

      <div id="post3"></div>

      <div id="post4">
      <h3 class="tittlePost">La diferencia entre lager y ale, explicada</h3>
      <p class="textPost">

      <img src="./img/blog/ale-lager.jpeg" align="left"> 
      Cuando se trata de cervezas, no hay más palabras que se repitan más como "ale"y "lager". Esto no es extraño, ya que todas la cervezas caen en al menos una de estas categorías, pero muchos de nosotros hemos ido por un camino de mala educación cuando se trata de distinguir a este par. Pero no temas: estamos aquí para ayudarte a comprender las diferencias entre las dos. </p>
      <h2 class="subTittlePost">La lager es mi estilo favorito, ¿qué puedes decirme de ella?</h2>
      <p class="textPost">Bueno, a pesar de lo que el marketing perezoso de las macrocervecerías puede hacerte creer, no es un estilo; lager es una categoría amplia de muchos estilos diferentes. La distinción entre ales y lager puede hacer que sea mucho más fácil encontrar una cerveza que te guste.<br>
      Entonces, ¿cúal es la diferencia entre ambas?,<br> 
      Realmente es simple. Las ales y lager se hacen usando diferentes cepas de levadura. En pocas palabras, las lager se elaboran utilizando cepas de levadura de fermentación inferior mantenidas a temperaturas más frías (alrededor de 4°C), mientras que las ale se elaboran con una levadura de fermentación superior que opera a temperaturas más cálidas (alrededor de 15-25°C, generalmente). 
      
      <h3 class="subTittlePost">Y eso es todo?</h3>
      <p class="textPost">Por supuesto, hay un poco más que eso. Lager es un sustantivo (que se traduce del alemán como "almacenamiento"), pero también es un verbo que se refiere al almacenamiento en frío de la cerveza mientras se fermenta. Hay un montón de bioquímica involucrada en comprenderlo completamente, pero es suficiente decir que la levadura lager requiere tradicionalmente un poco más de tiempo para prepararse que las ale.</p> <br>
      <p class="textPost">También vale la pena señalar la fascinante colisión de la biología celular, la artesanía y la civilización humana en general que ha tenido lugar en la elaboración de la cerveza. Las cepas específicas incluso han evolucionado con el tiempo a través de la selección de cerveceros, perfeccionando el proceso de selección incluso más que solo elegir la columna A o la columna B. Hoy en día, compañías enteras se especializan en propagar subcategorías enteras de lúpulos para crear muchos estilos específicos.</p>
      
      <h3 class="subTittlePost">¿Qué hay con el color?</h3>
      <p class="textPost">Contrariamente a una creencia popular extraña, el color o la claridad de una cerveza no tiene nada que ver con su clasificación de ale o larger. Hay cervezas rubias que son tan pálidas como las pilsners checas clásicas (una lager), y lagers suaves y oscuras como schwarzbiers que son tan opacas y negras como las stouts (una cerveza inglesa). Esto se debe a que el color de la cerveza se imparte en la malta, y en el caso de ciertas recetas, aditivos como frutas, especias y otros ingredientes aleatorios, y no tiene nada que ver con la levadura que se usa.</p>
      
      <h3 class="subTittlePost">Y el contenido alcoholico?, he leido que las lager son más suaves</h3>
      <p class="textPost">No tiene nada que ver, a menos que considere que un doppelbock de 9.5% de ABV es una "cerveza baja en alcohol", las lager veces pueden ser las cervezas más fuertes que se ofrecen en un menú.</p>
      <h3 class="subTittlePost">¿Entonces al menos deberían tener un sabor diferente?</h3>
      <p class="textPost">¡En tantos casos, sí! Las levaduras ale producen una cerveza de sabor más robusto, son más afrutadas y aromáticas, sabor y aroma complejo y más amargor, mientras que las lager tiene sabor más liero, son altamente carbonadas o "crujientes", poseen un aroma más sutil, equilibrado y limpio, por lo general son más suaves</p>
      
      <h3 class="subTittlePost">¿Hay alguna excepción a esta regla?</h3>
      <p >Con la cerveza, siempre hay excepciones a la regla. Algunos estilos bastante famosos pueden considerarse híbridos de los dos. Kölsch y altbier, por ejemplo, están hechos con levadura de ale fermentada a temperaturas más grandes. La cerveza común de California o "steem beer", es un estilo de origen estadounidense que involucra levadura de lager elaborada a temperaturas de ale. Este término medio puede ser un lugar bastante amigable si sabes lo que estás bebiendo, algo así como la mejor de ambos mundos.</p>
      
      <h3 class="subTittlePost">¿Cuáles son algunos ejemplos populares de cada tipo?</h3>
      <p >Este es un tema bastante amplio, que detallaremos en un futuro post, pero a modo de introducción podemos decir que las cervezas tienen una historia que tiene profundas raíces alemanas y bávaras, por lo que puede ayudar pensar en un país cuando se trata de recordar las categorías. Como pilsners, schwarzbiers, bock, doppelbock y lagers de Viena son ejemplos excelentes. Las ales se vincula más tradicionalmente con Bélgica y Gran Bretaña, así que piense en IPA, stouts,pale ales, brown ales, saisons, dubbels, tripels y quads.</p>

      <h3class="subTittlePost">Esto parece muy básico. ¿Por qué es tan difícil de entender?</h3class=>
      <p >El punto es que la distinción es importante solo para obtener una mejor comprensión de lo que ya te gusta. Ahora toma esto como una excusa para ir a tu bar o tienda de cerveza local favorita y hacer la tarea.</p>
    
      </section>
  </div>`
  divBlog.innerHTML = viewBlog;

  return divBlog;
}