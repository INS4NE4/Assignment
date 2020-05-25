const registrationForm = document.querySelector ('.registration_form_steep1');
const registrationForm2 = document.querySelector ('.registration_form_steep2');
const registrationToggler = document.querySelector('.registration_form_btn');
registrationToggler.addEventListener('click', registrationTogglerClick);

function registrationTogglerClick() {
    registrationForm.classList.toggle('registration_form_steep1_hide')
    registrationForm2.classList.toggle("registration_form_steep2_active");
}