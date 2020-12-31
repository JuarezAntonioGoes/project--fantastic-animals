export default class SectionScrool {
  constructor() {
    this.sectionJs = document.querySelectorAll('.js-section');
    this.metadeTela = window.innerHeight * 0.6;
  }

  scrool() {
    this.sectionJs.forEach((section) => {
      const secTop = section.getBoundingClientRect().top - this.metadeTela < 0;

      if (secTop) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  addEvent() {
    window.addEventListener('scroll', () => {
      this.scrool();
    });
  }

  init() {
    this.scrool();

    if (this.sectionJs.length && this.metadeTela) {
      this.addEvent();
    }
    return this;
  }
}
