document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnCadastrar').addEventListener('click', clickCadastro);
    document.getElementById('btnCancelar').addEventListener('click', clickCancela);
});

function main(){
    if (window.localStorage.getItem("codReceita") == -1){
        //abre em branco
    }else{
        //faz pesquisa de edição
    }
}

function clickCadastro(element){
    var vUsuario = document.getElementById("usuario").value;
    var vNome = document.getElementById("nome").value;
    var vSenha1 = document.getElementById("senha").value;
    var vSenha2 = document.getElementById("senha2").value;
    var vEmail = document.getElementById('email').value;
    
    if (vUsuario != ""){
        if (vEmail != ""){
            if ((vSenha1 === vSenha2) &&(vSenha1 != "")){
                //função de verdade
                
                var obj = {usuario:{usuario:vUsuario,nome:vNome, senha:vSenha1,email:vEmail}};
                var param = "dados="+JSON.stringify(obj);

                var http = new XMLHttpRequest();
                http.open('POST', 'https://pedrogoulartm.000webhostapp.com/receita/serviceSubmeteReceita.php', true);

                http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                http.onreadystatechange = function() {
                    if(http.readyState == 4 && http.status == 200) {
                        //alert(this.responseText);
                        var ww = JSON.parse(this.responseText);
                        if (ww.dados_resposta.ok = 's'){
                            alert("Usuario cadastrado!");
                            window.location = "index.html";
                        }else{
                            alert("Usuario ou email já cadastrado!");
                        }

                    }
                }
                http.send(param);
                alert(param);
                //fim da função
            }else{
                alert("Senha invalida");
            }
        }else{
            alert("Email invalido");
        }
    }else{
        alert("Usuario invalido");
        alert(vUsuario);
    }
    //window.location = "index.html";
}

function clickCancela(element){
    window.location = "index.html";
}
