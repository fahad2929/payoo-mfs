// show the cash out form
document.getElementById('show-cash-out').addEventListener('click',function(){

    //  show cash out button clicked
    console.log('cash out button clicked');
    document.getElementById('cash-out-form').classList.remove('hidden');
    // hidden add money form
    document.getElementById('add-money-form').classList.add('hidden');

})

// show add money form hide cash out form

document.getElementById('show-add-money')
.addEventListener('click',function(){

     document.getElementById('add-money-form').classList.remove('hidden');

     document.getElementById('cash-out-form').classList.add('hidden');
})