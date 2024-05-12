const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){

    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }
    else{
        links.classList.add('show-links');

    }
})

let invalidName = document.querySelector('.invaildTekst');  
let invalidEmail = document.querySelector('.invaild-email');  
let invaildMsg = document.querySelector('.invaild-message');
const regexName = /^[a-zæøåA-ZÆØÅ. \-]{3,20}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexMsg = /^[a-zæøåA-ZÆØÅ. \-]{5,20}$/;





function validateName(navn) {

    const validateName = regexName.test(navn);
    if(!validateName){
        invalidName.innerHTML = "Invalid name";
        invalidName.classList.add("wrong");

        return false;
    }
        
    else{
        invalidName.innerHTML= "Navn <span>*</span>";
        invalidName.classList.remove("wrong");
        return true;
    }
}

function validateEmail(email) {

    const validateEmail = regexEmail.test(email);
    if(!validateEmail){
        invalidEmail.innerHTML = "Invalid email";
        invalidEmail.classList.add("wrong");
        return false;
    }
        
    else{
        invalidEmail.innerHTML = "E-post <span>*</span>";
        invalidEmail.classList.remove("wrong");

        return true;
    }
}

function validateMessage(msg) {

    const validateMsg = regexMsg.test(msg);
    if(!validateMsg){
        invaildMsg.innerHTML = "Invalid text";
        invaildMsg.classList.add("wrong");
        return false;
    }
        
    else{
        invaildMsg.innerHTML = "Melding <span>*</span>";
        invaildMsg.classList.remove("wrong");

        return true;
    }
}
/* I yse function reset() insted of it */
/*
function emptyForm(){
    const name = document.getElementById('navn').value ="";
    const email = document.getElementById('email').value= "";
    const message = document.getElementById('message').value = "";

}
*/
const contactForm = document.querySelector('.contact-form');
const clearFrom = document.getElementById('contact-form');
const sendBtn = document.querySelector('.submit-btn');
const overlyModel = document.querySelector('.model-overlay');
sendBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    const name = document.getElementById('navn').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate the inputs
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isMessageValid = validateMessage(message);

    // If any validation fails, alert "noooo"
    if (isNameValid && isEmailValid && isMessageValid) {
        clearFrom.reset(); // Reset the form
       contactForm.classList.add('hide-form')
       overlyModel.classList.add('display-message')
    }
});
const lukk = document.querySelector('.closeBtn');
lukk.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    
    if (contactForm.classList.contains('hide-form') || overlyModel.classList.contains('display-message')) {
       contactForm.classList.remove('hide-form')
       overlyModel.classList.remove('display-message')
       return true;
    }
    else{
        return false;
    }
});
   

    


    






