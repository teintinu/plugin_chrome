setInterval(function () {
    debugger
    var inputPesquisaTopNavbar = document.querySelector('.inputPesquisaTopNavbar');
    if (inputPesquisaTopNavbar) {
        inputPesquisaTopNavbar.setAttribute('placeholder', 'Plugin funcionando: ' + new Date().toString());
    }
}, 2000);
