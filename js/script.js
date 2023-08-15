document.querySelector('#btn-submit').addEventListener('click', function(){
    const email = document.querySelector('#user-email').value;
    const password = document.querySelector('#user-password').value;
    if(email === 'baaper@taka.com'  && password === 'takaEtaka'){
        console.log("Taka r Poisha");
    }else{
        console.log('Muri Kha');
    }
});