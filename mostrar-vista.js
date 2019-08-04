function MostrarVista(mostrar, ocultar, callback){
    function hide(fn){
        ocultar.forEach(function(e){
            var hideEle = document.getElementById(e);
            hideEle.style.opacity = 1;
            var fadeEffect = setInterval(function() {
            if (hideEle.style.opacity < 0.1)
            {
            hideEle.style.display='none';
            fn();
            clearInterval(fadeEffect);
            }
            else
            {
            hideEle.style.opacity -= 0.1;
            }
            }, 20);
        });
    }
    function show(){
        mostrar.forEach(function(e) {
            var showEle = document.getElementById(e);
            showEle.style.opacity = 0;
            showEle.style.display='block';
                var i = 0;
                fadeIn(showEle,i);
                function fadeIn(showEle,i) {
                    i = i + 0.05;
                    seto(showEle,i);
                    if (i<1){setTimeout(function(){fadeIn(showEle,i);}, 25);}
                }
                function seto(el,i)
                {
                    el.style.opacity = i;
                }
        });
    }
    hide(show);
    callback = callback || new Function;
    callback();
}