const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_franquias_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_franquias_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que existe aproximadamente <span>230.5 mil</span> franquias sendo elas (Domino’s Pizza, Burger King, KFC, McDonald’s, Subway e Eleven)que estão presentes em todo o mundo, onde para fazer parte delas você tem que fazer um investimento incial que é por média de <span>900 mil reais</span>.<br>Isso significa que a pessoa tem que ser no minimo rica para conseguir abrir uma franquia.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
