const aboutButton = document.querySelector('.about__detail-button');
const aboutDetail = document.querySelector('.about__detail');
const buttonText = document.querySelector('.about__button-text');

function openAboutDetail() {
  aboutButton.addEventListener('click', function () {
    if (aboutDetail.classList.contains('about__detail--close')) {
      aboutDetail.classList.remove('about__detail--close');
      buttonText.textContent = 'Свернуть';
    } else {
      aboutDetail.classList.add('about__detail--close');
      buttonText.textContent = 'Подробнее';
    }
  });
}

export {openAboutDetail};
