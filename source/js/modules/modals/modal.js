const headerButton = document.querySelector('.header__button');
const modalCloseButton = document.querySelector('.modal__close-button');
const modalWindow = document.querySelector('.modal-container');
const modalContainer = document.querySelector('.modal-container__modal');

function openModal() {
  headerButton.addEventListener('click', function () {
    if (modalWindow.classList.contains('modal-container--close')) {
      modalWindow.classList.remove('modal-container--close');
    } else {
      modalWindow.classList.add('modal-container--close');
    }
  });

  modalCloseButton.addEventListener('click', function () {
    modalWindow.classList.add('modal-container--close');
  });

  modalWindow.addEventListener('click', function () {
    modalWindow.classList.add('modal-container--close');
  });

  modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
  });
}

export {openModal};
