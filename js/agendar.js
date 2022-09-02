var btn = document.querySelector('#vercfp')

var nome = document.querySelector('#nome')
var labelnome = document.querySelector('#labelnome')
var validnome = false

var cpf = document.querySelector('#cpf')
var labelcpf = document.querySelector('#labelcpf')
var validcpf = false

var email = document.querySelector('#email')
var labelemail = document.querySelector('#labelemail')
var validemail = false

var destino = document.querySelector('#destino')
var labeldestino = document.querySelector('#labeldestino')
var validdestino = false

var data = document.querySelector('#data')
var labeldata = document.querySelector('#labeldata')
var validdata = false

var contato = document.querySelector('#contato')
var labelcontato = document.querySelector('#labelcontato')
var validcontato = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

/* validação dos input---->*/

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 5){
  labelnome.setAttribute('style', 'color: red ')
  labelnome.innerHTML = 'Nome *inválido'
  validnome = false
 
} else {
  labelnome.setAttribute('style', 'color: #000 ')
  labelnome.innerHTML ='Nome:'
  validemail = true
}

})

email.addEventListener('keyup', () => {
  if(email.value.length <= 5){
  labelemail.setAttribute('style', 'color: red ')
  labelemail.innerHTML = 'email *Email inválido'
  validemail = false
 
} else {
  labelemail.setAttribute('style', 'color: #000 ')
  labelemail.innerHTML ='Email:'
  validemail = true
}

})

confirmsenha.addEventListener('keyup', () => {
  if(senha.value != confirmsenha.value){
  labelconfirmsenha.setAttribute('style', 'color: red ')
  labelconfirmsenha.innerHTML = 'Confirma sua senha *Não conferem'
  validconfirmsenha = false
 
  } else {
  labelconfirmsenha.setAttribute('style', 'color: #000 ')
  labelconfirmsenha.innerHTML ='Confirme sua senha :'
  validconfirmsenha = true      
  }   
})

/*  <------*/