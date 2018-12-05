document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('teste').addEventListener('click', clickTest);
});

function clickTest(element){
    alert(window.localStorage.getItem("usuario"));
}
