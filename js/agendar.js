var btn = document.querySelector('#vercpf')


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

let pessoas = document.querySelector('#pessoas')
let labelpessoas = document.querySelector('#labelpessoas')
let qpessoa = 0
let validpessoas= false

let contato = document.querySelector('#contato')
let labelcontato = document.querySelector('#labelcontato')
let validcontato = false

/* Visualizar senha */

var btn = document.querySelector(".fa-eye");

btn.addEventListener("click", () => {
  var inputcpf = document.querySelector("#cpf");

  if (inputcpf.getAttribute("type") == "password") {
    inputcpf.setAttribute("type", "text");
  } else {
    inputcpf.setAttribute("type", "password");
  }
});



/* validação dos input item NOK, o destino EUA não está sendo lido - ---->*/
let destinoEuropa = "Europa"




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
  labelemail.setAttribute('style', 'color: #000 ')
  labelemail.innerHTML ='Cpf:'
  validemail= true
}

})

destino.addEventListener('keyup', () => {   /*  não está finalizado validação de destino ---->*/

  let destinoValorMaisculo = destino.value.toUpperCase()
  let destinoEuropaMaisculo = destinoEuropa.toUpperCase()
  
if(destinoValorMaisculo.localeCompare (destinoEuropaMaisculo)) {
    labeldestino.setAttribute('style', 'color: red ')
    labeldestino.innerHTML = 'Destino *inválido '
    validdestino = false

} else {
    labeldestino.setAttribute('style', 'color: #000 ')
    labeldestino.innerHTML = 'Destino: '
    validdestino = true
}

})

data.addEventListener('keyup', () => {
  if(data.value.length <= 3){
  labeldata.setAttribute('style', 'color: red ')
  labeldata.innerHTML = 'Data *inválida'
  validdata = false
 
} else {
  labeldata.setAttribute('style', 'color: #000 ')
  labeldata.innerHTML ='Data:'
  validdata = true
}
})

pessoas.addEventListener('keyup', () => {
  if(pessoas.value == Number.parseInt(0)){
  labelpessoas.setAttribute('style', 'color: red ')
  labelpessoas.innerHTML = 'Quantidade *inválida'
  validpessoas = false
 
} else {
  labelpessoas.setAttribute('style', 'color: #000 ')
  labelpessoas.innerHTML ='Pessoas:'
  validpessoas = true
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


/*  função agendar ---->*/

let agendarpacote = document.querySelector('.agendar-usuario');

agendarpacote.addEventListener ("click", function(event) {
    event.preventDefault();
 
    if (validnome && validcpf && validemail && validdata && validdestino && validpessoas && validcontato ){
        let listauser = JSON.parse(localStorage.getItem('listauser') || '[]')

        listauser.push(
            {

            nomecad: nome.value,
            cpfcad: cpf.value,
            emailcad: email.value,
            datacad: data.value,
            destinocad: destino.value,
            pessoascad: pessoas.value,
            contatocad: contato.value

        }      
        )

        localStorage.setItem('listauser', JSON.stringify(listauser))


        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = 'Passagem agendada com sucesso'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        
        setTimeout(()=> {

        window.location.href='./index.html'

        }, 1000)
        
    
    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Prencha todos so campos corretamente'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
})

/*  <------*/
