const headerButton = document.querySelector('.header__button');
const modalCloseButton = document.querySelector('.modal__close-button');
const modalWindow = document.querySelector('.modal-container');
const modalContainer = document.querySelector('.modal-container__modal');
const focusableElements = 'input, textarea, button, [tabindex]:not([tabindex="-1"])';
const firstFocusableElement = document.getElementById('name');
const focusableContent = modalWindow.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1];


function escClose() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalWindow.classList.add('modal-container--close');
    }
  });
}

function focusable() {
  document.addEventListener('keydown', function (e) {
    let isTabPressed = e.key === 'Tab' || e.key === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
      }
    }
  });
}

function openModal() {
  escClose();
  focusable();

  headerButton.addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    if (modalWindow.classList.contains('modal-container--close')) {
      modalWindow.classList.remove('modal-container--close');
      firstFocusableElement.focus();
    } else {
      modalWindow.classList.add('modal-container--close');
    }
  });

  modalCloseButton.addEventListener('click', function () {
    modalWindow.classList.add('modal-container--close');
    document.body.style.overflow = '';
  });

  modalWindow.addEventListener('click', function () {
    modalWindow.classList.add('modal-container--close');
    document.body.style.overflow = '';
  });

  modalContainer.addEventListener('click', (event) => {
    lastFocusableElement.focus();
    event.stopPropagation();
  });
}

export {openModal};
