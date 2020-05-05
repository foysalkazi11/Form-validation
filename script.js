const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const conformPassword = document.querySelector('#conformPassword');
const inputes = document.querySelectorAll('input');
console.log(inputes);




const patterns = {
  name:/^[a-z\s\-]{2,}$/i,
  lastName:/^[a-z\s\-]{2,10}$/i,
  username:/^[\w\-\.]{5,12}$/,
  phoneNumber:/^[\d]{11}$/,
  password:/^(?=.*\d).{8,12}$/,
  conformPassword:/^(?=.*\d).{8,12}$/,
  email:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  address1:/^[.\s,.'-]{3,}$/,
  address2:/^[a-zA-Z0-9\s,.'-]{3,}$/

};

form.addEventListener('submit',(e) =>{
  e.preventDefault();
  checkInputs();

});

function checkInputs() {
  const nameValue = name.value;
  const emailValue = email.value;
  const phoneValue = phoneNumber.value;
  const usernameValue = username.value;
  const passwordValue = password.value;
  const conformPasswordValue = conformPassword.value;

  if (nameValue === '' || patterns.name.test(nameValue) === false ) {
    setErrorFor(name);
  }else if (patterns.name.test(nameValue) === true) {
    setSuccessFor(name);
  }
  
  if (emailValue === '' || patterns.email.test(emailValue) === false ) {
    setErrorFor(email);
  }else if (patterns.email.test(emailValue) === true) {
    setSuccessFor(email);
  }

  if (phoneValue === '' || patterns.phoneNumber.test(phoneValue) === false ) {
    setErrorFor(phoneNumber);
  }else if (patterns.phoneNumber.test(phoneValue) === true) {
    setSuccessFor(phoneNumber);
  }

  if (usernameValue === '' || patterns.username.test(usernameValue) === false ) {
    setErrorFor(username);
  }else if (patterns.username.test(usernameValue) === true) {
    setSuccessFor(username);
  }

  if (passwordValue === '' || patterns.password.test(passwordValue) === false ) {
    setErrorFor(password);
  }else if (patterns.password.test(passwordValue) === true) {
    setSuccessFor(password);
  }
  if (conformPasswordValue === '' || passwordValue !== conformPasswordValue ) {
    setErrorFor(conformPassword);
  }else if (passwordValue === conformPasswordValue) {
    setSuccessFor(conformPassword);
  }
}

function setErrorFor(input){
  const formControl = input.parentElement;
  formControl.querySelector('small').
  style.display = 'block';
  formControl.className = 'form-control error';
}

function setSuccessFor(name) {
  const formControl = name.parentElement;
  formControl.className = 'form-control success';
  formControl.querySelector('small').
  style.display = 'none';
}

function validation(field,regex) {
  
  if (regex.test(field.value) === false) {
    
   field.parentElement.className = 'form-control error';
    field.querySelector('small').style.visibility = 'visible';
    
    
  }else if(regex.test(field.value) === true){
  
    field.parentElement.className = 'form-control success';
    field.querySelector('small').style.visibility = 'hidden';
   
  }
}


 inputes.forEach(inpute =>{
  inpute.addEventListener('keyup',(e)=>{

    validation(e.target,patterns[e.target.attributes.id.value]);

    
    

  });
});
