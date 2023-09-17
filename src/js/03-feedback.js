import throttle from 'lodash.throttle'
const inputEl = document.querySelector('.feedback-form')
const SAVE_INPUT_KEY = 'feedback-form-state'
inputEl.addEventListener('input', throttle(inputData, 500))
inputEl.addEventListener('submit', onSubmit)
