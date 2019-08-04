## MostrarVista

### Ejemplo
index.html
```html
    <div id="vista1" class="center">
        <img src="1.jpg" alt="" class="ancho">
    </div>
    <div id="vista2" class="center">
        <img src="2.jpg" alt="" class="ancho">
    </div>
    <div id="vista3" class="center">
        <img src="3.jpg" alt="" class="ancho">
    </div>
    <div id="vista4" class="center">
        <img src="4.jpg" alt="" class="ancho">
    </div>

  <button class="btn" id="btn">Enviar</button>
  
  <script src="mostrar-vista.js"></script>
  <script src="main.js"></script>
```
main.js
```js
var btn = document.getElementById('btn');
var vistas = ["vista1", "vista2", "vista3", "vista4"];

btn.onclick=function(e){
    e.preventDefault();
    MostrarVista(["vista4", "vista2"], vistas);
}

// Se puede ejecutar un callback al terminar
MostrarVista(["vista3"], vistas, function(){
  console.log("Terminado");
});
```
