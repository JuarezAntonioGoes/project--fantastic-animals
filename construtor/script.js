import ValidarCPF from './ValidarCPF.js'

const campoCPF = document.querySelector('#cpf')

const ValidCPF = new ValidarCPF(campoCPF)

ValidCPF.init()