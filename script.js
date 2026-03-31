document.getElementById("cadastroForm").addEventListener("submit", function(e){

e.preventDefault()

let nome = document.getElementById("nome").value
let email = document.getElementById("email").value
let senha = document.getElementById("senha").value
let mensagem = document.getElementById("mensagem")

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(nome === ""){
mensagem.style.color="red"
mensagem.innerText="Nome obrigatório"
return
}

if(!emailRegex.test(email)){
mensagem.style.color="red"
mensagem.innerText="Email inválido"
return
}

if(senha.length < 6){
mensagem.style.color="red"
mensagem.innerText="Senha precisa ter pelo menos 6 caracteres"
return
}

let usuario = {
nome: nome,
email: email,
senha: senha
}

localStorage.setItem("usuario", JSON.stringify(usuario))

mensagem.style.color="green"
mensagem.innerText="Cadastro realizado com sucesso!"

})
 
function mostrarSenha(){
let senha = document.getElementById("senha")

if(senha.type === "password"){
senha.type = "text"
}else{
senha.type = "password"
}
}