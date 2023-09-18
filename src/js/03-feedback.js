import throttle from 'lodash.throttle'
const inputEl = document.querySelector('.feedback-form')
const SAVE_INPUT_KEY = 'feedback-form-state'
inputEl.addEventListener('input', throttle(inputData, 500))
inputEl.addEventListener('submit', onSubmit)

let inputForm = JSON.parse(localStorage.getItem(SAVE_INPUT_KEY)) || {};

const { email, message } = inputEl.elements;
reloadPage();

function inputData(evt) {
  inputForm = { email: email.value, message: message.value };

  localStorage.setItem(SAVE_INPUT_KEY, JSON.stringify(inputForm));
}

function reloadPage() {
  if (inputForm) {
    email.value = inputForm.email || '';
    message.value = inputForm.message || '';
  }
}

function onSubmit(evt) {
    evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  
  if (email.value === '' || message.value === '') {
    alert('Заповніть будь-ласка всі поля !')
  };

    localStorage.removeItem(SAVE_INPUT_KEY);
    evt.currentTarget.reset();
   inputForm = {};
}