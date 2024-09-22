document.getElementById('btn-cash-out')
.addEventListener('click', function(event){

    event.preventDefault();
    console.log('cash out button clicked');

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNo = parseFloat(cashOut);
    const cashOutPin = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut,cashOutPin)
    if(cashOutPin === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNo = parseFloat(balance);
        // reduce balance 

        const newBalance = balanceNo - cashOutNo

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to Cash Out,Please try Again Later')
    }
});