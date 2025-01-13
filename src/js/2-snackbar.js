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
  });
};

form.addEventListener('submit', event => {
  event.preventDefault();
  stateInput = document.querySelector('[name="state"]:checked');
  if (stateInput != null) {
    createPromise(Number.parseInt(delayInput.value), stateInput.value)
      .then(result => {
        iziToast.success({ message: `Fulfilled promise in ${result}ms` });
      })
      .catch(result => {
        iziToast.error({ message: `Rejected promise in ${result}ms` });
      });
    form.reset();
  } else {
    console.log('Error: stateInput is null');
  }
});
