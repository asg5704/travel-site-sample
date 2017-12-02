import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalBtn = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalBtn = $('.modal__close');
    this.events();
  }
  events() {
    //Clicking Open Modal Button
    this.openModalBtn.click(this.openModal.bind(this));
    //Clicking the X Close Modal Cutton
    this.closeModalBtn.click(this.closeModal.bind(this));
    //Pushes the Escape Key
    $(document).keyup(this.keyHandler.bind(this));
  }

  keyHandler(e) {
    if(e.keyCode === 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass('modal--is-visible')
    return false;
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible');
  }
}

export default Modal;