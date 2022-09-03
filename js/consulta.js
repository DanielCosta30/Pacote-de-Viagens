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


    /*ForEach  vai vazer minha lista item por item  em cada lista*/

    listauser.forEach((item) => {
        if (nome.value == item.nomecad || cpf.value == item.cpfcad) {
          uservalid = {
            nome: item.emailcad,
            cpf: item.cpfcad,
          };
        }
      });
    
      if (nome.value == uservalid.nome && cpf.value == uservalid.cpf) {
    
        window.location.href='./agendamento.html'
        
      } else {
    
        nomelabel.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')
        cpflabel.setAttribute('style', 'color: red')
        cpf.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        nome.focus()
    
      }
    
    });
    
    
