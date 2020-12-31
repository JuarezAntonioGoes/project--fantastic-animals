export default class MenuScrool {
  constructor(lista) {
    this.menu = document.querySelectorAll(lista);
  }

  menuSc(event) {
    event.preventDefault();
    const link = event.currentTarget.getAttribute('href');
    const idLink = document.querySelector(link);
    const linkTop = idLink.offsetTop;

    window.scroll({
      top: linkTop,
      left: 0,
      behavior: 'smooth',
    });
  }

  addEvent() {
    this.menu.forEach((item) => {
      item.addEventListener('click', this.menuSc);
    });
  }

  init() {
    if (this.menu.length) {
      this.addEvent();
    }
    return this;
  }
}
