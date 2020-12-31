export default class AtivaDD {
  constructor(DT, DD) {
    this.faqDT = document.querySelectorAll(DT);
    this.faqDD = document.querySelectorAll(DD);
  }

  removeClassAtivo() {
    this.faqDD.forEach((itemDD) => {
      itemDD.classList.remove('ativo');
    });

    this.addEvent();
  }

  AddAtivoFaq(e) {
    this.faqDT[e].classList.toggle('ativo');
    this.faqDD[e].classList.toggle('ativo');
  }

  addEvent() {
    this.faqDT.forEach((faq, indexFaq) => {
      faq.classList.remove('ativo');
      faq.addEventListener('click', () => {
        this.AddAtivoFaq(indexFaq);
      });
    });
  }

  init() {
    if (this.faqDT.length && this.faqDD.length) {
      this.removeClassAtivo();
    }
    return this;
  }
}
