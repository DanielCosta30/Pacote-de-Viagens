var btn = document.querySelector('#vercpf')


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


/* verificar agendamento---->*/

let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')

let cpf= document.querySelector('#senha')
let labelcpf = document.querySelector('#labelcpf')

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


    /*ForEach  vai vazer minha lista item por item  em cada lista*/

    listauser.forEach((item) => {
        if (nome.value == item.nomecad || cpf.value == item.cpfcad) {
          uservalid = {
            nome: item.nomecad,
            cpf: item.cpfcad,
          };
        }
      });
    
      if (nome.value == uservalid.nome && cpf.value == uservalid.cpf) {
    
        setTimeout(()=> {

            window.location.href='./agendamento.html'
    
            }, 1000)
      } else {
    
        labelnome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')
        labelcpf.setAttribute('style', 'color: red')
        cpf.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        nome.focus()
    
      }
    
    });
    
    
