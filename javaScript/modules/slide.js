export default class Slide {
  constructor() {
    this.slide = document.querySelector('.slide');
    this.slideWrapper = document.querySelector('.slide-wrapper');

    this.position = {
      final: 0,
      positionX: 0,
      slideAtual: 0,
    };
  }

  moveSlide(paramPosition) {
    this.slide.style.transform = `translate3d(${paramPosition}px, 0, 0)`;
    this.position.movePosition = paramPosition;
  }

  attPosition(positionEixoX) {
    const positionAtt = positionEixoX - this.position.positionX;
    return positionAtt + this.position.final;
  }

  mousePressionado(e) {
    this.transitionStyle(false);

    if (e.type === 'mousedown') {
      e.preventDefault();
      this.position.positionX = e.clientX;
    } else {
      this.position.positionX = e.changedTouches[0].clientX;
    }

    this.slideWrapper.addEventListener('mousemove', this.mouseMove);
    this.slideWrapper.addEventListener('touchmove', this.mouseMove);
  }

  mouseMove(e) {
    let result;

    if (e.type === 'mousemove') {
      result = this.attPosition(e.clientX);
    } else {
      result = this.attPosition(e.changedTouches[0].clientX);
    }

    this.moveSlide(result);
  }

  mouseSolto(e) {
    this.position.final = this.position.movePosition;

    if (e.type === 'mouseup') {
      this.slideWrapper.removeEventListener('mousemove', this.mouseMove);
    } else {
      this.slideWrapper.removeEventListener('touchend', this.mouseMove);
    }
    this.transitionStyle(true);
    this.alignSlide();
  }

  alignSlide() {
    const position =
      this.position.final +
      this.slideNumbers[this.slideNextPrev.atual].position;

    const mapSlides = this.slideNextPrev;
    if (position < -110 && mapSlides.prox !== mapSlides.atual) {
      this.slideNext();
    } else if (position > 270 && mapSlides.prev !== mapSlides.atual) {
      this.slidePrev();
    } else {
      this.slideSelecionado(this.slideNumbers[this.slideNextPrev.atual]);
    }
  }

  addEvent() {
    this.slideWrapper.addEventListener('mousedown', this.mousePressionado);
    this.slideWrapper.addEventListener('touchstart', this.mousePressionado);

    this.slideWrapper.addEventListener('mouseup', this.mouseSolto);
    this.slideWrapper.addEventListener('touchend', this.mouseSolto);

    window.addEventListener('resize', this.resizeFunc());
  }

  centralizarSlide(slideSelected) {
    const espaceLeft =
      slideSelected.position -
      (this.slideWrapper.offsetWidth - slideSelected.item.offsetWidth) / 2;

    return -espaceLeft;
  }

  slideAtual() {
    this.slideNumbers = Array.from(this.slide.children).map((item, index) => {
      const position = item.offsetLeft;
      return {
        position,
        item,
        index,
      };
    });

    this.slideSelecionado(this.slideNumbers[this.position.slideAtual]);
  }

  slideSelecionado(slide) {
    this.addClass(slide);

    const localização = this.centralizarSlide(slide);
    this.position.final = localização;

    this.moveSlide(localização);
    this.slidesNextPrev(slide.index);
  }

  slideNext() {
    const position = this.slideNextPrev;

    if (position.prox !== position.atual) {
      this.position.slideAtual = position.prox;
      this.slideSelecionado(this.slideNumbers[this.position.slideAtual]);
      this.addClassActive(this.position.slideAtual);
    }
  }

  slidePrev() {
    const position = this.slideNextPrev;

    if (position.prev !== position.atual) {
      this.position.slideAtual = position.prev;
      this.slideSelecionado(this.slideNumbers[this.position.slideAtual]);
      this.addClassActive(this.position.slideAtual);
    }
  }

  slidesNextPrev(slide) {
    this.slideNextPrev = {
      prev: slide > 0 ? slide - 1 : slide,
      atual: slide,
      prox: slide < this.slideNumbers.length - 1 ? slide + 1 : slide,
    };
  }

  transitionStyle(param) {
    if (param) {
      this.slide.style.transition = '.4s';
    } else {
      this.slide.style.transition = '0s';
    }
  }

  addClass(slide) {
    this.slideNumbers.forEach((sld) => {
      sld.item.classList.remove('active');
    });
    slide.item.classList.add('active');
  }

  resizeFunc() {
    let timer = null;

    return () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        this.recizeSlide();
      }, 500);
    };
  }

  recizeSlide() {
    this.slideAtual();
  }

  bindFunc() {
    this.mousePressionado = this.mousePressionado.bind(this);
    this.mouseSolto = this.mouseSolto.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.attPosition = this.attPosition.bind(this);
    this.slideNext = this.slideNext.bind(this);
    this.resizeFunc = this.resizeFunc.bind(this);
    this.slidePrev = this.slidePrev.bind(this);
    this.addClassActive = this.addClassActive.bind(this);
    // this.paginacao = this.paginacao.bind(this);
  }

  init() {
    this.bindFunc();
    this.addEvent();
    this.slideAtual();
    this.selectButtons();

    return this;
  }
}

export class SlideNav extends Slide {
  selectButtons() {
    this.buttonNext = document.querySelector('.next');
    this.buttonPrev = document.querySelector('.prev');

    this.addEventButtons();
  }

  addEventButtons() {
    this.buttonNext.addEventListener('click', this.slideNext);
    this.buttonPrev.addEventListener('click', this.slidePrev);
  }

  addEventPag() {
    this.addClassActive(this.position.slideAtual);

    this.listSlides.forEach((buttonLink) => {
      buttonLink.addEventListener('click', () => {
        const number = buttonLink.getAttribute('href').replace('#', '');
        this.slideSelecionado(this.slideNumbers[number - 1]);
        this.addClassActive(number - 1, this.listSlides);
      });
    });
  }

  addClassActive(indexSlide) {
    this.listSlides.forEach((slide, index) => {
      if (indexSlide !== index) {
        slide.classList.remove('active');
      } else {
        slide.classList.add('active');
      }
    });
  }

  paginacao() {
    const ul = document.createElement('ul');
    ul.classList.add('lista-pag');
    this.slideNumbers.forEach((slide) => {
      ul.innerHTML += `<li class= "pag"><a href="#${
        slide.index + 1
      }"><img src= "./img/foto${slide.index + 1}-thumb.jpg" /></a></li>`;
    });

    this.slideWrapper.insertBefore(ul, this.slide);

    this.listSlides = ul.querySelectorAll('.pag a');
    this.addEventPag();
  }
}
