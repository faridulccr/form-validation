{
    // get element from html
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let validName, validEmail, validPhone;
    let submitBtn = document.getElementById('submitBtn');

    // add listener for name
    name.addEventListener('blur',()=>{
        /* for test method
        ^ ==> starts with,  $ ==> ends with
        * ^[a-zA-Z] ==> if the string starts with [a-zA-Z] then return true otherwise false
        * ([0-9a-zA-Z. ]) ==> if the string's all characters are [0-9a-zA-Z with "." and "space"] then return true otherwise false
        * {1,19}$ ==> if the number of characters is less than 2 or total more than 20(1+19) return false
        */
       // validate name here
        let regex = /^[a-zA-Z]([0-9a-zA-Z\.\s]){1,19}$/; // minimum 2 total 20 \s ==> space
        let nameValue = name.value;
        let nameValid = document.getElementById('nameValid');
        if(regex.test(nameValue)){ // returns true or false
            name.classList.remove('is-invalid');
            nameValid.style.color = "";
            validName = true;
        }else{
            name.classList.add('is-invalid');
            nameValid.style.color = "red";
            validName = false;
        };
    });

    // add listener for email
    email.addEventListener('blur',()=>{
        // validate email here
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let emailValue = email.value;
        let emailValid = document.getElementById('emailValid');
        if(regex.test(emailValue)){ // returns true or false
            email.classList.remove('is-invalid');
            emailValid.style.color = "";
            validEmail = true;
        }else{
            email.classList.add('is-invalid');
            emailValid.style.color = "red";
            validEmail = false;
        };
    });

    // add listener for phone
    phone.addEventListener('blur',()=>{
        let regex = /^([\+0-9]){10,20}$/; //0-9 with "+" minimum 10, maximum 20
        let phoneValue = phone.value;
        let phoneValid = document.getElementById('phoneValid');
        if(regex.test(phoneValue)){ // returns true or false
            phone.classList.remove('is-invalid');
            phoneValid.style.color = "";
            validPhone = true;
        }else{
            phone.classList.add('is-invalid');
            phoneValid.style.color = "red";
            validEmail = false;
        };
    });

    // add listener for submitBtn
    submitBtn.addEventListener('click',(event)=>{
        event.preventDefault(); // prevent default behaviour

        let alertSuccess = document.getElementById('alertSuccess');
        let alertDanger = document.getElementById('alertDanger');
        if(name.value && email.value && phone.value && validName && validEmail && validPhone){
            alertSuccess.style = "display: block";
            setTimeout(()=>{alertSuccess.style = "display: none"},3000);
        }else{
            alertDanger.style = "display: block";
            setTimeout(()=>{alertDanger.style = "display: none"},3000);
        };
        name.value = '';
        email.value = '';
        phone.value = '';
        
    });





}