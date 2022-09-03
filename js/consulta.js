var btn = document.querySelector('#vercpf')

/* verificar agendamento---->*/

let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')
let validnome = false

let cpf= document.querySelector('#senha')
let labelcpf = document.querySelector('#labelcpf')
let validcpf = false

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
