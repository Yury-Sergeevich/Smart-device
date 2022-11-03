const aboutButton = document.querySelector('.about__detail-button');
const aboutDetail = document.querySelector('.about__detail');
const buttonText = document.querySelector('.about__button-text');

function openAboutDetail() {
  aboutButton.addEventListener('click', function () {
    if (aboutDetail.classList.contains('about__detail--close')) {
      aboutDetail.classList.remove('about__detail--close');
      buttonText.classList.add('about__button-text--more-details');
    } else {
      aboutDetail.classList.add('about__detail--close');
      // buttonText.classList.remove('about__button-text--roll-up');
    }
  });
}

export {openAboutDetail};
