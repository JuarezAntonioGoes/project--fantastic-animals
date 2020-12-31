export default class Dropdown {
  constructor(buttons) {
    this.linkMenu = document.querySelectorAll(buttons);

    this.modalAction = this.modalAction.bind(this);
    this.clicarFora = this.clicarFora.bind(this);
  }

  clicarFora(event) {
    this.linkMenu.forEach((list) => {
      if (!list.contains(event.target)) {
        list.querySelector('.dropdown-menu').classList.remove('active');
      }
    });
  }

  modalAction(e, index) {
    e.preventDefault();
    const UlSelecionado = this.linkMenu[index].querySelector('ul');

    if (
      UlSelecionado.classList.contains('active') &&
      e.target === this.linkMenu[index].querySelector('a')
    ) {
      UlSelecionado.classList.remove('active');
    } else if (!UlSelecionado.classList.contains('active')) {
      UlSelecionado.classList.add('active');
    }
  }

  addEvent() {
    this.linkMenu.forEach((item, index) => {
      item.addEventListener('click', (event) => {
        this.modalAction(event, index);
      });
    });

    document.body.addEventListener('click', this.clicarFora);
  }

  init() {
    this.addEvent();
    return this;
  }
}
