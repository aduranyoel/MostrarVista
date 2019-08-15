var btn = document.getElementById('btn');
var vistas = ["vista1", "vista2", "vista3", "vista4"];

btn.onclick=function(e){
    e.preventDefault();
    MostrarVista(["vista4", "vista2"], vistas, {
        fade: {
            enabled: false,
            timeIn: 8,
            timeOut: 10
        },
        callback: function(){
            alert("this is the callback");
        }
    });
}