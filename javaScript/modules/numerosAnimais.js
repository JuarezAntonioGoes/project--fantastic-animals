export default function numerosAnimais() {
  const numeros = document.querySelectorAll('[data-numero]');
  const sectionNumeros = document.querySelector('[data-section-numero]');

  function animarNumeros() {
    numeros.forEach((item) => {
      const paramItem = item;
      const ValorNumeros = +paramItem.innerHTML;
      const acelerador = Math.floor(ValorNumeros / 100);

      let i = 0;
      const NumerosInterval = setInterval(() => {
        paramItem.innerHTML = i;
        i += acelerador;
        if (ValorNumeros < paramItem.innerHTML) {
          clearInterval(NumerosInterval);
          paramItem.innerHTML = ValorNumeros;
        }
      }, 10);
    });
  }

  let observador;

  function observarSection() {
    observador.disconnect();
    animarNumeros();
  }

  observador = new MutationObserver(observarSection);
  observador.observe(sectionNumeros, {attributes: true});
}
