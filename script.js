const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');


const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validate() {
    let nameValid = nameInput.value.trim() !== "";
    let emailValid = emailInput.value.match(emailPattern);
    let passValid = passwordInput.value.length >= 6;

    
    document.getElementById('nameError').style.display = nameValid ? "none" : "block";
    document.getElementById('emailError').style.display = emailValid ? "none" : "block";
    document.getElementById('passwordError').style.display = passValid ? "none" : "block";

    
    submitBtn.disabled = !(nameValid && emailValid && passValid);
}
[nameInput, emailInput, passwordInput].forEach(input => {
    input.addEventListener('input', validate);
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('customAlert').style.display = 'flex';
});


function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
    form.reset();
    validate();   
}