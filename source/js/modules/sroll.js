const scrollTarget = document.querySelectorAll('.promo__button-decription');
const form = document.querySelector('.form__question');

function handleButtonclick() {
  form.scrollIntoView({
    block: 'start', behavior: 'smooth',
  });
}

export {scrollTarget, handleButtonclick};
