export const comuniBeer = () => {
    const divcomuniBeer = document.createElement("div");
    const viewcomuniBeer = `   
    <div id="banner"></div>
    <div class="comments">
     <h1>Hola mundo</h1>
        <input type="text" id="nombre" placeholder='nombre' class='form-control'></input>
        <input type="text" id="apellido" placeholder='apellido' class='form-control'></input>
        <input type='text' id="edad" placeholder='edad' class='form-control'></input>
        <button class='btn-info' id='btn-comment' onclick='guardar()'>Comentar!</button>
    </div>

    <div>
  <table class='table'>
    <head>
      <tr>
        <th scope='col'>Id</th>
        <th scope='col'>First</th>
        <th scope='col'>last</th>
        <th scope='col'>born</th>
      </tr>
    </head>
    <body id='tabla'>
    </body>
  </table>
</div>
    `

    divcomuniBeer.innerHTML = viewcomuniBeer;
    return divcomuniBeer;
  }
 