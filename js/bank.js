
// deposit section

const depositBtn = document.querySelector('#btn-deposit');
depositBtn.addEventListener('click', function () {
    const userDeposit = document.querySelector('#user-deposit');
    const userDepositAmount = parseFloat(userDeposit.value);
    
    const depositString = document.querySelector('#deposit');
    let deposit = parseFloat(depositString.innerText);
    const balanceString = document.querySelector('#balance');
    let balance = parseFloat(balanceString.innerText);
    userDeposit.value = '';

    if (userDepositAmount < 0) {
        alert("Taka dite bosi nite na");
        return;
    }else if (isNaN(userDepositAmount)) {
        alert("Please provide a number");
        return;
    }
    depositString.innerText = userDepositAmount + deposit;
    

    balanceString.innerText = userDepositAmount + balance;
    
});

// withdraw section
const withdrawtBtn = document.querySelector('#btn-withdraw');
withdrawtBtn.addEventListener('click', function () {
    const userWithdraw = document.querySelector('#user-withdraw');
    const userWithdrawAmount = parseFloat(userWithdraw.value);
    
    const withdrawString = document.querySelector('#withdraw');
    let withdraw = parseFloat(withdrawString.innerText);
    const balanceString = document.querySelector('#balance');
    let balance = parseFloat(balanceString.innerText);
    userWithdraw.value = '';
    if (userWithdrawAmount > balance) {
        alert("Baap er bank e eto taka ny!!!");
        return;
    }else if (isNaN(userWithdrawAmount)) {
        alert("Please provide a number");
        return;
    }
    withdrawString.innerText = userWithdrawAmount + withdraw;


    balanceString.innerText = balance - userWithdrawAmount;

});