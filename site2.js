function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value < 1900 || fano.value > ano) {
        window.alert('[Erro] Verifique os dados!!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancamenino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmenino.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancamenina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmenina.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
