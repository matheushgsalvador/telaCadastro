document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault()

let email = document.getElementById("loginEmail").value
let senha = document.getElementById("loginSenha").value
let mensagem = document.getElementById("loginMensagem")

let usuario = JSON.parse(localStorage.getItem("usuario"))

if(!usuario){
mensagem.style.color="red"
mensagem.innerText="Nenhum usuário cadastrado"
return
}

if(email === usuario.email && senha === usuario.senha){

mensagem.style.color="green"
mensagem.innerText="Login realizado!"

localStorage.setItem("usuarioLogado", true)

setTimeout(()=>{
window.location.href="dashboard.html"
},1000)

}else{

mensagem.style.color="red"
mensagem.innerText="Email ou senha incorretos"

}

})

function mostrarSenha(){
let senha = document.getElementById("loginSenha")

if(senha.type === "password"){
senha.type = "text"
}else{
senha.type = "password"
}
}

function esqueciSenha(){

let usuario = JSON.parse(localStorage.getItem("usuario"))

if(usuario){
alert("Sua senha é: " + usuario.senha)
}else{
alert("Nenhum usuário cadastrado")
}

}