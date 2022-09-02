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

var destinoEuropa = "Europa";


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
  validnome = true
}

})

cpf.addEventListener('keyup', () => {
  if(cpf.value.length <= 3){
  labelcpf.setAttribute('style', 'color: red ')
  labelcpf.innerHTML = 'Cpf * inválido'
  validcpf = false
 
} else {
  labelcpf.setAttribute('style', 'color: #000 ')
  labelcpf.innerHTML ='Cpf:'
  validcpf = true
}

})

email.addEventListener('keyup', () => {
  if(email.value.length <= 3){
  labelemail.setAttribute('style', 'color: red ')
  labelemail.innerHTML = 'Email * inválido'
  validemail = false
 
} else {
  labelcpf.setAttribute('style', 'color: #000 ')
  labelcpf.innerHTML ='Cpf:'
  validcpf = true
}

})

destino.addEventListener('keyup', () => {
  if(destino.value.length != destinoEuropa ){
  labeldestino.setAttribute('style', 'color: red ')
  labeldestino.innerHTML = 'Destino *inválido'
  validdestino = false
 
} else {
  labeldestino.setAttribute('style', 'color: #000 ')
  labeldestino.innerHTML ='Destino:'
  validdestino = true
}

})

contato.addEventListener('keyup', () => {
  if(contato.value.length <= 3){
  labelcontato.setAttribute('style', 'color: red ')
  labelcontato.innerHTML = 'Contato *inválido'
  validcontato = false
 
} else {
  labelcontato.setAttribute('style', 'color: #000 ')
  labelcontato.innerHTML ='Contato:'
  validcontato = true
}

})

/*  <------*/