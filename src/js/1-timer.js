import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

const datetimePicker = document.querySelector('input#datetime-picker');
const startButton = document.querySelector('[data-start]');
const timerFields = document.querySelectorAll('.field .value');

let userDateTime = null;
let intervalId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onChange(selectedDates) {
    try {
      if (selectedDates[0] - new Date() <= 0) {
        iziToast.error({
          title: 'Error',
          message: 'Please choose a date in the future',
          position: 'topRight',
          backgroundColor: '#EF4040',
          color: '#fff',
        });
        startButton.disabled = true;
      } else {
        startButton.disabled = false;
      }
    } catch (error) {
      console.log(error);
    }
  },
  onClose(selectedDates) {
    try {
      if (selectedDates[0] - new Date() <= 0) {
        startButton.disabled = true;
        userDateTime = null;
      } else {
        userDateTime = selectedDates[0];
        startButton.disabled = false;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerDisplay(
  timeData = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }
) {
  Object.keys(timeData).forEach(key => {
    const field = [...timerFields].find(item => {
      return item.dataset[key] !== undefined;
    });

    field.textContent = addLeadingZero(timeData[key]);
  });
}

function resetToDefault() {
  if (intervalId) {
    clearInterval(intervalId);
    console.log('timer is off');
  }
  updateTimerDisplay();
  startButton.disabled = true;
  datetimePicker.disabled = false;
}

function updateTimer() {
  const difference = userDateTime - new Date();
  if (difference <= 0) {
    resetToDefault();
    return;
  }
  updateTimerDisplay(convertMs(difference));
}

startButton.attributes['disabled'] = true;

flatpickr(datetimePicker, options);

resetToDefault();

startButton.addEventListener('click', () => {
  if (!userDateTime) return;

  intervalId = setInterval(updateTimer, 1000);
  updateTimer();
  startButton.disabled = true;
  datetimePicker.disabled = true;
});
