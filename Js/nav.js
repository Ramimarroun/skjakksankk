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


function validateName(name) {

    const regex = /^[a-zæøåA-ZÆØÅ. \-]{3,20}$/;
    const validateName = regex.test(name);
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

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validateEmail = regex.test(email);
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

    const regex = /^[a-zæøåA-ZÆØÅ. \-]{5,20}$/;
    const validateMsg = regex.test(msg);
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
  
   

    


    






