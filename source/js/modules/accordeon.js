const accordeonButton = document.querySelectorAll('.nav-site__acardeon-button');
const accordeonContent = document.querySelectorAll('.nav-site__acardeon-content');
const accNojs = document.querySelectorAll('.nav-site__accordeon-no-js');

function accordeonInit() {
  accNojs.forEach((item) => {
    item.classList.remove('nav-site__accordeon-no-js');
  });
}

export {accordeonInit};
