export default class MenuMobile {
  constructor(menu, lista, classe) {
    this.menuAction = document.querySelector(menu);
    this.menuLista = document.querySelector(lista);
    this.classe = classe

    this.addEvent = this.addEvent.bind(this);
    this.expandirLista = this.expandirLista.bind(this);
    this.cliqueForaMenu = this.cliqueForaMenu.bind(this);
  }

  cliqueForaMenu(e) {
    if (
      !this.menuLista.contains(e.target) &&
      !this.menuAction.contains(e.target)
    ) {
      this.menuLista.classList.remove(this.classe);
    }
  }

  expandirLista() {
    this.menuLista.classList.toggle(this.classe);
  }

  addEvent() {
    this.menuAction.addEventListener('click', this.expandirLista);
    document.body.addEventListener('click', this.cliqueForaMenu);
  }

  init() {
    this.addEvent();
    return this;
  }
}
