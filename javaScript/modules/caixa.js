export default class Caixa {
  constructor(elemento) {
    this.caixa = document.querySelector(elemento);

    this.createElementAndAdd = this.createElementAndAdd.bind(this);
    this.positionCaixa = this.positionCaixa.bind(this);
    this.removerCaixa = this.removerCaixa.bind(this);
  }

  createElementAndAdd(event) {
    const caixaDiv = document.createElement('div');
    caixaDiv.classList.add('caixa-texto');
    caixaDiv.innerText = this.caixa.getAttribute('aria-label');
    document.body.appendChild(caixaDiv);

    this.divContent = caixaDiv;

    this.positionCaixa(event);
  }

  positionCaixa(event) {
    this.divContent.style.top = `${event.pageY + 20}px`;

    if (event.pageX + 200 > window.innerWidth) {
      this.divContent.style.left = `${event.pageX - 200}px`;
    } else {
      this.divContent.style.left = `${event.pageX + 20}px`;
    }

    this.caixa.removeEventListener('mouseleave', this.positionCaixa);
  }

  caixaTexto() {
    moverCaixa.caixaDiv = caixaDiv;

    removerCaixa.caixaDiv = caixaDiv;
    removerCaixa.event = this;

    this.addEventListener('mouseleave', this.removerCaixa);
  }

  removerCaixa() {
    this.divContent.remove();
  }

  addEvent() {
    this.caixa.addEventListener('mouseover', this.createElementAndAdd);
    this.caixa.addEventListener('mousemove', this.positionCaixa);
    this.caixa.addEventListener('mouseleave', this.removerCaixa);
  }

  init() {
    if (this.caixa) {
      this.addEvent();
    }
    return this;
  }
}
