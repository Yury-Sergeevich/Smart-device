import IMask from 'imask';

const inputPhone = document.querySelectorAll('.phone');

function maskPhone() {
  inputPhone.forEach((item) => {
    const mask = new IMask(item, {
      mask: '{+7}(000)000-00-00',
    });
  });
}

export {maskPhone};


