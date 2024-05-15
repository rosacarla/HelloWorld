/* alert("Olá mundo!");  -> linha de comando para teste inicial */
/* prompt("Qual o seu nome?"); -> exemplo de uso da função prompt */

let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuario");

while (nomeUsuario == ""){
    nomeUsuario = prompt("Qual é o seu nome?");
}

if (nomeUsuario == null){
    elemento.textContent = 'seja muito bem vindo(a)!';
}else{
    elemento.textContent = nomeUsuario;
}