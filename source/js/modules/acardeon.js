const sectionControlTitle = document.querySelector('.section-site__control-title');
const sectionSiteWrapper = document.querySelector('.section-site__wrapper');
const sectionSiteButton = document.querySelector('.section-site__button');
const addressControlTitle = document.querySelector('.address__control-title');
const addressWrapper = document.querySelector('.address__wrapper');
const addressControlButton = document.querySelector('.address__control-button');

sectionSiteWrapper.classList.add('section-site__wrapper--close');
sectionSiteButton.classList.add('section-site__button--close');

function openSectionSite() {
  sectionControlTitle.addEventListener('click', () => {
    if (sectionSiteWrapper.classList.contains('section-site__wrapper--close')) {
      sectionSiteWrapper.classList.remove('section-site__wrapper--close');
      addressWrapper.classList.add('address__wrapper--close');
      addressControlButton.classList.add('address__control-button--close');
      sectionSiteButton.classList.remove('section-site__button--close');
      sectionSiteButton.classList.add('section-site__button--open');
    } else {
      sectionSiteWrapper.classList.add('section-site__wrapper--close');
      sectionSiteButton.classList.add('section-site__button--close');
    }
  });

  addressWrapper.classList.remove('address__wrapper--close');
  addressControlButton.classList.remove('address__control-button--close');
  addressControlButton.classList.add('address__control-button--open');
  addressControlTitle.addEventListener('click', () => {
    if (addressWrapper.classList.contains('address__wrapper--close')) {
      addressWrapper.classList.remove('address__wrapper--close');
      sectionSiteWrapper.classList.add('section-site__wrapper--close');
      sectionSiteButton.classList.add('section-site__button--close');
      addressControlButton.classList.remove('address__control-button--close');
      addressControlButton.classList.add('address__control-button--open');
    } else {
      addressWrapper.classList.add('address__wrapper--close');
      addressControlButton.classList.add('address__control-button--close');
    }
  });
}

export {openSectionSite};
