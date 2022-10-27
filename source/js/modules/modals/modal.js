const headerButton = document.querySelector('.header__button');
const modalWindow = document.querySelector('.modal-container');

function openModal() {
  headerButton.addEventListener('click', function () {
    if (modalWindow.classList.contains('modal-container--close')) {
      modalWindow.classList.remove('modal-container--close');
    } else {
      modalWindow.classList.add('modal-container--close');
    }
  });
}

export {openModal};
