import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]'),
};

const formData = { email: '', message: '' };

refs.form.addEventListener('input', throttle(saveForm, 500));
refs.form.addEventListener('submit', submitForm);

loadForm();

function saveForm(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
}

function submitForm(e) {
  e.preventDefault();
  e.target.reset();
  console.log('Storage:', JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

function loadForm() {
  const loadData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (loadData) {
    refs.email.value = loadData.email;
    refs.message.value = loadData.message;
  }
}

refs.email.setAttribute('required', "");
refs.message.setAttribute('required', "");