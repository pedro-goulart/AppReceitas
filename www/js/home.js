document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('teste').addEventListener('click', clickTest);
});

function clickTest(element){
    alert(JSON.parse(window.localStorage.getItem("usuario")).usuario);
}
