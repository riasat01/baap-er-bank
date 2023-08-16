function getElement(id) {
    return document.querySelector(id);
}

function getValue(element) {
    const amount = parseFloat(element.value);
    element.value = '';
    return amount
}

function getText(element) {
    return parseFloat(element.innerText);
}


document.querySelector('#btn-deposit').addEventListener('click', function () {
    const userDeposit = getElement('#user-deposit');
    const userDepositAmount = getValue(userDeposit);
    const depositString = getElement('#deposit');
    const deposit = getText(depositString);
    const balanceString = getElement('#balance');
    const balance = getText(balanceString);

    if (userDepositAmount < 0) {
        alert("Taka dite bosi nite na");
        return;
    } else if (isNaN(userDepositAmount)) {
        alert("Please provide a number");
        return;
    }
    depositString.innerText = userDepositAmount + deposit;


    balanceString.innerText = userDepositAmount + balance;
});


document.querySelector('#btn-withdraw').addEventListener('click', function(){
    const userWithdraw = getElement('#user-withdraw');
    const userWithdrawAmount = getValue(userWithdraw);
    const withdrawString = getElement('#withdraw');
    const withdraw = getText(withdrawString);
    const balanceString = getElement('#balance');
    const balance = getText(balanceString);

    if (userWithdrawAmount > balance) {
        alert("Baap er bank e eto taka ny!!!");
        return;
    }else if (isNaN(userWithdrawAmount)) {
        alert("Please provide a number");
        return;
    }
    withdrawString.innerText = userWithdrawAmount + withdraw;


    balanceString.innerText = balance - userWithdrawAmount;
})