import Tab from './modules/tab.js';
import AtivaDD from './modules/ativaDD.js';
import MenuScrool from './modules/menuScrool.js';
import SectionScrool from './modules/sectionScrool.js';
import Modal from './modules/modal.js';
import Caixa from './modules/caixa.js';
import Dropdown from './modules/dropdown.js';
import MenuMobile from './modules/menuMobile.js';
import numerosAnimais from './modules/numerosAnimais.js';
import initData from './modules/initData.js';
import {SlideNav} from './modules/slide.js';

const tab = new Tab('.animais-lista li', '.js-tab-content section');
tab.init();

const ativaDD = new AtivaDD('.faq-lista dt', '.faq-lista dd');
ativaDD.init();

const menuScrool = new MenuScrool('.js-menu a[href^="#"]');
menuScrool.init();

const sectionScrool = new SectionScrool();
sectionScrool.init();

const modal = new Modal(
  '#login',
  '[data-modal="container"]',
  '[data-modal="fechar"]'
);
modal.init();

const caixa = new Caixa('[data-texto]');
caixa.init();

const dropdown = new Dropdown('[data-dropdown]');
dropdown.init();

const menuMobile = new MenuMobile(
  '[data-menu="mobile"]',
  '[data-menu="lista"]',
  'ativo'
);
menuMobile.init();

numerosAnimais();
initData();

const slide = new SlideNav();
slide.init();
slide.paginacao();
