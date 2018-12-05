document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnAbreMenu').addEventListener('click', w3_open);
    document.getElementById('btnFechaMenu').addEventListener('click', w3_close);
    document.getElementById('btnSair').addEventListener('click', sair);
    document.getElementById('btnReceitas').addEventListener('click', pesqReceitas);
    document.getElementById('btnNovaReceita').addEventListener('click', novaReceita);
});

function w3_open(element) {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close(element) {
    document.getElementById("mySidebar").style.display = "none";
}

function novaReceita(element){
    window.location = "cadastroreceita.html";
}

function pesqReceitas(element){
    window.location = "home.html";
}

function sair(element){
    window.location = "index.html";
}