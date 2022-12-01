const scrollTarget = document.querySelectorAll('.promo__button-decription');
// const form = document.querySelector('.form__question');

function handleButtonclick() {
  window.scrollBy({
    top: 3130, behavior: 'smooth',
  });
}

export {scrollTarget, handleButtonclick};
