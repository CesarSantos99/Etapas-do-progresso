const progresso = document.getElementById('progresso')
const anterior = document.getElementById('anterior')
const proximo = document.getElementById('proximo')
const circulo = document.querySelectorAll('.circulo')


let ativarBotao = 1


proximo.addEventListener('click', () => {
    ativarBotao++

    if(ativarBotao > circulo.length) {
        ativarBotao = circulo.length
    }
    update()
})

anterior.addEventListener('click', () => {
    ativarBotao--
    
    if(ativarBotao < 1) {
        ativarBotao = 1
    }
    update()
})

function update() {
    circulo.forEach((circulo, idx) => {
        if(idx < ativarBotao) {
            circulo.classList.add('ativo')
        } else {
            circulo.classList.remove('ativo')
        }
    })

    const ativos = document.querySelectorAll('.ativo')

    progresso.style.width = (ativos.length - 1) / (circulo.length - 1) * 100 + '%'

    if( ativarBotao === 1) {
        anterior.disabled = true
    } else if(ativarBotao === circulo.length) {
        proximo.disabled = true
    } else {
        anterior.disabled = false
        proximo.disabled = false
    }

}












