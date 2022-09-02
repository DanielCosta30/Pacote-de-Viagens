let btn = document.querySelector('#vercfp')

let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')
let validnome = false

let cpf = document.querySelector('#cpf')
let labelcpf = document.querySelector('#labelcpf')
var validcpf = false

let email = document.querySelector('#email')
let labelemail = document.querySelector('#labelemail')
let validemail = false

let destino = document.querySelector('#destino')
let labeldestino = document.querySelector('#labeldestino')
let validdestino = false

let data = document.querySelector('#data')
let labeldata = document.querySelector('#labeldata')
let validdata = false

let contato = document.querySelector('#contato')
let labelcontato = document.querySelector('#labelcontato')
let validcontato = false

let destinoEuropa = "Europa";


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