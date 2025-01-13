import iziToast from 'izitoast';

const form = document.querySelector('form');
const delayInput = document.querySelector('[name="delay"]');
const inputField = document.querySelector('fieldset');
let stateInput = document.querySelector('[name="state"]:checked');

const createPromise = (delay, state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(result => {
      iziToast.success({ message: `Fulfilled promise in ${result}ms` });
    })
    .catch(result => {
      iziToast.error({ message: `Rejected promise in ${result}ms` });
    });
};

form.addEventListener('submit', event => {
  event.preventDefault();

  if (stateInput != null) {
    console.log(delayInput.value);
    console.log(stateInput.value);
    createPromise(Number.parseInt(delayInput.value), stateInput.value);
    form.reset();
    stateInput = null;
    console.dir(stateInput);
  } else {
    console.log('Error');
  }
});

inputField.addEventListener('change', () => {
  stateInput = document.querySelector('[name="state"]:checked');
});
