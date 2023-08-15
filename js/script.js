document.querySelector('#btn-submit').addEventListener('click', function(){
    const email = document.querySelector('#user-email').value;
    const password = document.querySelector('#user-password').value;
    if(email === 'baaper@taka.com'  && password === 'takaEtaka'){
        window.location.href = 'bank.html'
    }else{
        alert('Muri Kha');
    }
});