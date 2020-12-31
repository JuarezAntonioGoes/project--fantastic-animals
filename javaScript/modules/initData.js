export default function initData() {
  const horaFuncionamento = document.querySelector('[data-semana]');
  let hora = horaFuncionamento.dataset.horas;
  let dias = horaFuncionamento.dataset.semana;

  hora = hora.split(',').map(Number);

  dias = dias.split(',').map(Number);

  const data = new Date();

  const horaAtual = data.getHours();

  const DiaAtual = data.getDay();

  const diaAberto = dias.indexOf(DiaAtual) !== -1;

  let horaAberta = false;

  if (horaAtual >= hora[0] && horaAtual < hora[1]) {
    horaAberta = true;
  }

  if (diaAberto && horaAberta) {
    horaFuncionamento.classList.add('aberto');
  }
}
