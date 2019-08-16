function MostrarVista(mostrar, ocultar, options){
    'use strict';
            options = options || {};
            options.callback = options.callback || new Function;
            options.fade = options.fade || {};
            options.fade.enabled = options.fade.enabled || false;
            options.fade.timeIn = options.fade.timeIn || 8;
            options.fade.timeOut = options.fade.timeOut || 10;
        function hideFade(fn) {
            ocultar.forEach(function (e) {
                var hideEle = document.getElementById(e);
                hideEle.style.opacity = 1;
                var fadeEffect = setInterval(function () {
                    if (hideEle.style.opacity < 0.1) {
                        hideEle.style.display = 'none';
                        fn();
                        clearInterval(fadeEffect);
                    }
                    else {
                        hideEle.style.opacity -= 0.1;
                    }
                }, options.fade.timeOut);
            });
        }
        function showFade() {
            mostrar.forEach(function (e) {
                var showEle = document.getElementById(e);
                showEle.style.opacity = 0;
                showEle.style.display = 'block';
                var i = 0;
                fadeIn(showEle, i);
                function fadeIn(showEle, i) {
                    i = i + 0.05;
                    seto(showEle, i);
                    if (i < 1) { setTimeout(function () { fadeIn(showEle, i); }, options.fade.timeIn); }
                }
                function seto(el, i) {
                    el.style.opacity = i;
                }
            });
        }
        function hide(fn) {
            ocultar.forEach(function (e) {
                var hideEle = document.getElementById(e);
                hideEle.style.display = 'none';
            });
            fn();
        }
        function show() {
            mostrar.forEach(function (e) {
                var showEle = document.getElementById(e);
                showEle.style.display = 'block';
            });
        }
        if (options.fade.enabled) {
            hideFade(showFade);
        } else {
            hide(show);
        }
        options.callback();
}
