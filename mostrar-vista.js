function MostrarVista(mostrar, ocultar, callback){
    ocultar.forEach(function(e){
        var hideEle = document.getElementById(e);
        hideEle.style.display='none';
    });
    mostrar.forEach(function(e) {
        var showEle = document.getElementById(e);
        showEle.style.display='block';
    });
    callback = callback || new Function;
    callback();
}
