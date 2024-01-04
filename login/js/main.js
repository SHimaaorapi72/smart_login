var user = [];

user = JSON.parse(localStorage.getItem('user'))

var signEmail = document.getElementById('signEmailInput');
var signpassw = document.getElementById('signPasswInput');

document.getElementById('login').addEventListener('click',function(){
    if(signEmail.value =='' || signpassw.value ==''){
        document.getElementById('message').innerHTML=`All inputs are required`
    }else if(checkUser() != false){
        checkUser();
    }
    else if(checkUser() == false){
        document.getElementById('message').innerHTML= `Enter a valid information`
    } 
    else {
        checkUser();
    }

})

function checkUser() {
    for (var i=0; i<user.length; i++ ) {
        
        if (signEmail.value.toLowerCase() == user[i].email.toLowerCase() && signpassw.value.toLowerCase() == user[i].password.toLowerCase()){
            var y = user[i].name;
            localStorage.setItem('username' , y);
            location.href = '../../Home/index.html'
            break;
            
        
    }else{
        return false
    }
}
}


