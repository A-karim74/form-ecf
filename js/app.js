const form = document.querySelector("#formulaire");
const errorName = document.getElementById("error-Name");
const errorFirstName = document.getElementById("error-FirstName");
const errorPhoneNumber = document.getElementById("errorPhoneNumber");
const errorMail = document.getElementById("errorMail");
const errorMsg = document.getElementById("errorText");
const errorSubmit = document.getElementById("errorSubmit");

//      form.Name.addEventListener('change', function () {
//     valideName(this);
// });

//  let valideName = function(inputName){
//   let name = (inputName.value);
//   let testName = name(inputName.value);
//     if (testName == 0){
//              errorName.innerHTML = 'le Nom est requis '

//              return false ;
//             }
//             errorName.innerHTML = "valide"
// };

let theName = document.getElementById("contact-Name");
let validateName = function () {
  if (theName.value.length == 0) {
    errorName.innerHTML = "le nom est requis !";
    return false;
  }
  if (!theName.value.match(/^[A-Za-z]*$/)) {
    errorName.innerHTML = "entrez un nom valide !";

    return false;
  } else {
    errorName.innerHTML ='<i class="fa-solid fa-circle-check">Valide !</i>';
    return true;
  }
};

theName.addEventListener("keyup", validateName);

let firstName = document.getElementById("contact-firstName");
let validateFirstName = function () {
  if (firstName.value.length == 0) {
    console.log(firstName.value.length);
    errorFirstName.innerHTML = "le prénom est requis !";
    return false;
  }
  if (!firstName.value.match(/^[A-Za-z]*$/)) {
    errorName.innerHTML = "entrez un nom valide !";

    return false;
  }
  {
    errorFirstName.innerHTML = '<i class="fa-solid fa-circle-check">Valide !</i>' ;
    return true;
  }
};
firstName.addEventListener("keyup", validateFirstName);

let phoneNumber = document.getElementById("phone");
let validatePhone = function () {
  if (phoneNumber.value.length == 0) {
    errorPhoneNumber.innerHTML = "Le numéro de téléphone est requis !";
    return false;
  }
  if (phoneNumber.value.length !== 10) {
    errorPhoneNumber.innerHTML =
      "Le numéro de téléphone doit contenir 10 chiffres !";
    return false;
  }
  if (!phoneNumber.value.match(/^[0-9]*$/)) {
    errorPhoneNumber.innerHTML = "entrez un numéro de téléphone  valide !";
   

    return false;
  } else {
    errorPhoneNumber.innerHTML = '<i class="fa-solid fa-circle-check">Valide !</i>';
    return true;
  }
};
phoneNumber.addEventListener("keyup", validatePhone);

let email = document.getElementById("mail");
let validateMail = function () {
  if (email.value.length == 0) {
    errorMail.innerHTML = "Une adresse Email est requise !";
    return false;
  }
  if (
    !email.value.match(
      /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/
    )
  ) {
    // [] + = le + signifie que l'ont peut retrouver plusieurs fois les caractére
    errorMail.innerHTML = "entrez une  adresse email valide !";
    
    return false;
  } else {
    errorMail.innerHTML = '<i class="fa-solid fa-circle-check">Valide !</i>';
    return true;
  }
};
email.addEventListener("keyup", validateMail);

let msg = document.getElementById("text");
let validateMsg = function () {
  if (msg.value.length == 0) {
    errorMsg.innerHTML = "Un message est requis !";
    return false;
  } else {
    errorMsg.innerHTML = '<i class="fa-solid fa-circle-check">Valide !</i>';
    return true;
  }
};
msg.addEventListener("keyup", validateMsg);

let validateAll = document.getElementById("submit");
let validateForm = function (e) {
  e.preventDefault();
  if (
    !validateName() ||
    !validateFirstName() ||
    !validatePhone() ||
    !validateMail() ||
    !validateMsg()
    
  ) {
    errorSubmit.innerHTML = "Veuillez remplir les champs requis !";

    return false;
  } else {
    errorSubmit.innerHTML = '<i class="fa-solid fa-circle-check">    Soumit!</i>';
  }
  var data = `nom=${theName.value}&firstName=${firstName.value}&phoneNumer=${phoneNumber}&mail=${email.value}&message=${msg.value}`;
  let xhr = new XMLHttpRequest();
  
    xhr.open("POST","php/script.php" , true );
    xhr.setRequestHeader(
      "Content-Type",
      "applaication/x-www-form-urlencoded"
    );
    xhr.send(data);
     form.reset();
  };
  validateAll.addEventListener("click", validateForm);
    
  
  // xhr.open("POST", "/php/Script.php" , true );
  
  // xhr.setRequestHeader("Content-type" , "application/x-www-form-urlencoded");
 

// document.getElementById('formulaire').addEventListener('submit',function (e){
//   e.preventDefault();
 

  
// });