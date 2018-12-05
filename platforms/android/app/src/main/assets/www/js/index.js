var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnLogin').addEventListener('click', clickLogin);
    document.getElementById('btnCadUsu').addEventListener('click', clickCadUsu);
    main();
});

function main(){
    //função main
}

function clickLogin(element){
    var usu = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var json = 'dados='+JSON.stringify({usuario:usu,senha:senha});
    
    var http = new XMLHttpRequest();
    http.open('POST', 'http://localhost/ServiceReceitas/service.php', true);

    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
            //window.localStorage.setItem("usuario", "O.o");
            window.location = "home.html";
        }
    }
    http.send(json);    
}

function clickCadUsu(element){
    window.location = "cadastrousuario.html";
}

