document.getElementById('userName').innerHTML = localStorage.getItem('username');


document.getElementById('logOutBtn').addEventListener('click', function(){
    localStorage.removeItem('username');
    location.href ='../../login/index.html';
})

