export default class Modal {
  constructor(button, telaModal, buttonFechar) {
    this.menu = document.querySelector(button);
    this.modal = document.querySelector(telaModal);
    this.fechar = document.querySelector(buttonFechar);

    this.menuFunc = this.menuFunc.bind(this);
  }

  menuFunc(event) {
    event.preventDefault();
    this.modal.classList.add('ativo');
  }

  menuFechar(event) {
    if (event.target === this) {
      event.currentTarget.classList.toggle('ativo');
    }
  }

  addEvent() {
    this.menu.addEventListener('click', this.menuFunc);

    this.modal.addEventListener('click', this.menuFechar);

    this.fechar.addEventListener('click', () => {
      this.modal.classList.remove('ativo');
    });
  }

  init() {
    if (this.menu && this.modal && this.menu) {
      this.addEvent();
    }
    return this;
  }
}
