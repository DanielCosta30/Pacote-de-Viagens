var btn = document.querySelector('#vercpf')

/* verificar agendamento---->*/

let email = document.querySelector('#email')
let labelemail = document.querySelector('#labelemail')
let validemail = false

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelSenha')
let validsenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


/* acessar agendamento */

let consultarag = document.querySelector(".consultar");

consultarag.addEventListener("click", function (event) {
  event.preventDefault();

  let nome = document.querySelector("#nome");
  let labelnome = document.querySelector("#labelnome");

  let cpf = document.querySelector("#cpf");
  let labelcpf = document.querySelector("#labelcpf");

  let msgError = document.querySelector("#msgError");
  let listauser = [];

  let uservalid = {
    nome: "",
    cpf: "",
  };
  listauser = JSON.parse(localStorage.getItem("listauser"));
