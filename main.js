var btn = document.getElementById('btn');
var vistas = ["vista1", "vista2", "vista3", "vista4"];

btn.onclick=function(e){
    e.preventDefault();
    MostrarVista(["vista4", "vista2"], vistas);
}