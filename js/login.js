// console.log('chap dilei onno groho')

// search : form submit reloading the page
// document.getElementById('button-login').addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('login button clicked');
// // step 3:Get The PhoneNumber
// const phoneNumber = document.getElementById('phone-number').value;
// const pinNumber = document.getElementById('pin').value;
// console.log(phoneNumber, pinNumber);
// })
document.getElementById('button-login')
.addEventListener('click', function(event){
    event.preventDefault();

// get phone number and pin
const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin').value;

// console.log(phoneNumber,pinNumber)

if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are logged in')
    window.location.href = '/home.html';
}
else{
    alert('Wrong phone number or pin number')
}
})
