var signupName = document.getElementById("nameInput");
var signupEmail = document.getElementById("emailInput");
var signuppassword = document.getElementById("passwordInput");
var addBtn = document.getElementById("signupBtn");
var user = [];


if(localStorage.getItem('user')!=null){
    user = JSON.parse(localStorage.getItem('user'))
}else{
    user=[]
}




addBtn.addEventListener('click' , function(){
    
    
if(signupName.value == '' || signupEmail.value == '' || signuppassword.value == ''  ){
    document.getElementById('message').innerHTML=`All inputs are required`

    


    
}else{
    var obj = {
        name:signupName.value,
        email:signupEmail.value,
        password:signuppassword.value
    }
    userNameValidation()
    userPasswordValidation()
    userEmailValidation()

    if(checkEmailExist() == true ){
        getAlertMessage('Email alredy exist','red')
        

    }else if (userNameValidation()== true &&  userPasswordValidation() == true && userEmailValidation() == true){
        user.push(obj)
        localStorage.setItem('user' , JSON.stringify(user));
        getAlertMessage('Success','green')
        location.href ='../../login/index.html'
        
    }else{
        getAlertMessage('invalid inputs','red')
    }

}


})

function getAlertMessage(text ,color){
    document.getElementById('AletMessage').classList.replace('d-none','d-block');
    document.getElementById('AletMessage').innerHTML = text;
    document.getElementById('AletMessage').style.color = color;
}

function checkEmailExist(){
    for( let i=0; i<user.length; i++){

        if(user[i].email == signupEmail.value)
        return true
        
    }
}

function userNameValidation(){
 
    var regex = /^([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){3,15}$/;

    if(regex.test(signupName.value) == true) {
        signupName.classList.add("is-valid");
        document.getElementById('userNameAlert').classList.replace("d-block","d-none");
        return true
    }else{
        signupName.classList.add("is-invalid");
        document.getElementById('userNameAlert').classList.replace("d-none","d-block")
        return false
    }

}

function userPasswordValidation(){
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if(regex.test(signuppassword.value) == true){
        signuppassword.classList.add("is-valid");
        document.getElementById('userPasswordAlert').classList.replace("d-block","d-none");
        return true
    }else{
        signuppassword.classList.add("is-invalid");
        document.getElementById('userPasswordAlert').classList.replace("d-none","d-block")
        return false
    }
}

function userEmailValidation(){
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;

    if(regex.test(signupEmail.value) == true){
        signupEmail.classList.add("is-valid");
        document.getElementById("userEmailAlert").classList.replace("d-block","d-none");
        return true
    }else{
        signupEmail.classList.add("is-invalid");
        document.getElementById("userEmailAlert").classList.replace("d-none","d-block");
        return false
    }
}
