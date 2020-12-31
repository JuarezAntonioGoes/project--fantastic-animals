export default class ValidarCPF {
    constructor(element) {
        this.element = element
    }

    formatCPF(cpfEntrada) {
        let cpf = this.retirarMask(cpfEntrada)

        cpf = this.validar(cpf)

        if (cpf) {
            cpf = this.colocarMask(this.validar(cpf))
            this.sucesso(cpf)
        } else {
            this.erro(cpf)
        }
    }

    sucesso(cpf) {
        this.element.value = cpf
        this.element.classList.add('sucess')
        this.element.classList.remove('error')

        const totalSpan = this.element.parentNode.querySelectorAll('span')

        if(totalSpan.length){
            totalSpan[0].remove()
        }

    }

    erro() {
        this.element.classList.add('error')
        this.element.classList.remove('sucess')

        const totalSpan = this.element.parentNode.querySelectorAll('span')

        if(totalSpan.length > 0){
            totalSpan[0].remove()
        }

        const span = document.createElement('span')
        span.innerText = 'CPF inválido!'

        this.element.parentNode.appendChild(span)

    }

    validar(cpf) {
        let validCPF = cpf.match(/[0-9]{11}/g)

        if (validCPF)
            return validCPF[0]
        else
            return false
    }

    retirarMask(cpf) {
        return cpf.replace(/[\D\s]/g, '')
    }

    colocarMask(cpf) {
        return cpf.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/g, '$1.$2.$3-$4')
    }

    addEvent(element) {
        element.addEventListener('change', () => {
            this.formatCPF(element.value)
        })
    }

    init() {
        this.addEvent(this.element)
        return this
    }
}
