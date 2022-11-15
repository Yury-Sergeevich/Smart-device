function initAccordion() {
  const accContent = document.querySelectorAll('.accordion__body');
  const accButtons = document.querySelectorAll('.accordion__btn');

  accContent.forEach((item) => item.classList.remove('no-js'));

  accButtons.forEach((item) => {
    item.addEventListener('click', () => {
      let content = item.nextElementSibling;
      if (content.classList.contains('open') && item.classList.contains('accordion__btn--open')) {
        accContent.forEach(function (el) {
          el.classList.remove('open');
        });
        accButtons.forEach(function (el) {
          el.classList.remove('accordion__btn--open');
        });
      } else {
        accContent.forEach(function (el) {
          el.classList.remove('open');
        });
        accButtons.forEach(function (el) {
          el.classList.remove('accordion__btn--open');
        });
        item.classList.add('accordion__btn--open');
        content.classList.add('open');
      }
    });
  });
}

export {initAccordion};
