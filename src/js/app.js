var buttonReservation = document.querySelector('.__box-reservation-only .btn-search-car') != null ? document.querySelector('.__box-reservation-only .btn-search-car').addEventListener('click', getInfoLocaleAndTime) : "";

document.querySelector('.__box-news button').addEventListener('click', getEmailNewsleter);

var buttonConfirmationReservation = document.querySelector('.finally .confirmation') != null ? document.querySelector('.finally .confirmation').addEventListener('click', confirmReservation) : "";


window.onload = function(){
    choicePlain();
}

// locale and time reservation
function getInfoLocaleAndTime(e){
    e.preventDefault();

    var data = {
        "pickup" : document.getElementById('pickup-location').value,
        "devolution" : document.getElementById('devolution-location').value,
        "pickupDate" : document.getElementById('pickup-date').value,
        "devolutionDate" : document.getElementById('devolution-date').value
    }

    // validate all inputs 
    if(validateAll(data)){
        window.location = "departament.html";
    }else{
        alert('Preencha todos os campos!')
    }

}

// newsletter
function getEmailNewsleter(e){
    e.preventDefault();
    console.log('lari')

    var data = {
        "email" : document.getElementById("email-newsletter").value
    }

    console.log(data.email)

    if(validateAll(data)){
       alert('você foi cadastrado com sucesso!')
    }else{
        alert('Preencha com um e-mail válido!')
    }


}

// choicePlain
function choicePlain(){
    var elements = document.querySelectorAll('.__box-plain li');

    //active plain
    for (const el of elements) {
        el.addEventListener('click', function(){
            removeActive();
            this.classList.add('active');
            this.querySelector('button').innerText = "Selecionado";
        })
    }

    //remove others plains
    function removeActive(){
        document.querySelectorAll('.__box-plain li').forEach(function(el){
            el.classList.remove('active');
            el.querySelector('button').innerText = "Selecionar";
        })
    }
}

// form reservation
function confirmReservation(e){
    e.preventDefault();

    var data = {
        "name" : document.getElementById('name').value,
        "email" : document.getElementById('email').value,
        "phone" : document.getElementById('cel').value,
        "nasc" : document.getElementById('nasc').value
    }

    // validate all inputs 
    if(validateAll(data)){
        alert("Reserva feita com sucesso!");
        window.location = "index.html";
    }else{
        alert('Preencha todos os campos!');
    }
}

// validate on all inputs
function validateAll(data){
    var verify = true;

    for (const d in data) {
        if (data.hasOwnProperty(d)) {
            var value = data[d];

            if(value == "" || value == null || value == undefined){
                verify = false;
            }

            if(d == "email"){
                validateEmail(data[d]) 
            }
        }
    }

    return verify;
}


//validate email 
function validateEmail(mail) 
{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return true
  }
    alert("Corrija o email!")
    return false
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleNavBar() {
  var x = document.querySelector("#myLinks"),
    bd = document.querySelector("body");
  
  x.classList.toggle("removed");
  bd.classList.toggle("noscroll");
}

//popup close 
document.querySelector('.__modal-login .__modal-login-overlay').addEventListener('click', function(){
  document.querySelector('.__modal-login').classList.remove('active');
})


//popup open
var loginBtns = Array.prototype.slice.call(
  document.querySelectorAll('.__header .login')
)

for(let btn of loginBtns){
  console.log(btn);
  btn.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.__modal-login').classList.add('active');
  })
}

// change type input
document.querySelector('.change-type-password').addEventListener('click', function(){

  if(document.querySelector('#password-login').type == "password"){
      document.querySelector('#password-login').type = "text";
  }else{
      document.querySelector('#password-login').type = "password";
  }
})
