export default class tab {
  constructor(listaTags, animaisTexto) {
    this.animaisLi = document.querySelectorAll(listaTags);
    this.listaAnimais = document.querySelectorAll(animaisTexto);
  }

  addAtivo(e) {
    this.listaAnimais.forEach((lista) => {
      lista.classList.remove('ativo');
    });

    const SectionData = this.listaAnimais[e].dataset.anime;
    this.listaAnimais[e].classList.add('ativo', SectionData);
  }

  addEvent() {
    this.listaAnimais[0].classList.add(this.listaAnimais[0].dataset.anime);

    this.animaisLi.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.addAtivo(index);
      });
    });
  }

  init() {
    if (this.animaisLi.length && this.listaAnimais) {
      this.addEvent();
    }

    return this;
  }
}
