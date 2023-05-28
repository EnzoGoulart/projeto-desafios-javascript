let div2 = document.getElementById('div2')
let i1 = document.getElementById('icone1')
let i2 = document.getElementById('icone2')
let i3 = document.getElementById('icone3')
let i4 = document.getElementById('icone4')
let i5 = document.getElementById('icone5')
let i6 = document.getElementById('icone6')
let i7 = document.getElementById('icone7')
let i8 = document.getElementById('icone8')
let div9 = document.getElementById('div9')

let inicio1 = document.getElementById('inicio');
let fim1 = document.getElementById('fim');
let passo1 = document.getElementById('passo');
let div5 = document.getElementById('div5');
let errorcheck = 0
let data = new Date()
let horario = data.getHours()
let min = data.getMinutes()
let bom = document.getElementById('bomdia')
let hora = document.getElementById('hora')
let img1 = document.getElementById('img1')
if(min<10){
    min = `0${min}`
}
if(horario<10){
    horario = `0${horario}`
}
if (horario >= 5 && horario < 12) {
    bom.innerHTML = 'Bom dia!'
    hora.innerHTML = `Agora são ${horario}:${min}.`
    img1.src = 'FotoDia.jpg'
    div2.style.backgroundColor = 'rgb(119, 201, 255)'
} else if (horario >= 12 && horario < 19) {
    bom.innerHTML = 'Boa tarde!'
    hora.innerHTML = `Agora são ${horario}:${min}.`
    img1.src = 'FotoTarde.jpg'
    div2.style.backgroundColor = 'rgb(127, 243, 112)'
} else {
    bom.innerHTML = 'Boa Noite!'
    hora.innerHTML = `Agora são ${horario}:${min}.`
    img1.src = 'FotoNoite.jpg'
    div2.style.backgroundColor = 'rgb(3, 49, 30)';
    div2.style.color = 'white'
}
function aparecer() {
    if (i1.style.display == 'block') {
        i1.style.display = 'none'
        i2.style.display = 'block'
        div2.style.display = 'block'
    } else {
        i1.style.display = 'block'
        i2.style.display = 'none'
        div2.style.display = 'none'
    }
}
function aparecer2() {
    if (i3.style.display == 'block') {
        i3.style.display = 'none'
        i4.style.display = 'block'
        div4.style.display = 'block'
    } else {
        i3.style.display = 'block'
        i4.style.display = 'none'
        div4.style.display = 'none'
    }
}
function aparecer3() {
    if (i5.style.display == 'block') {
        i5.style.display = 'none'
        i6.style.display = 'block'
        div7.style.display = 'block'
    } else {
        i5.style.display = 'block'
        i6.style.display = 'none'
        div7.style.display = 'none'
    }
}
function aparecer4() {
    if (i7.style.display == 'block') {
        i7.style.display = 'none'
        i8.style.display = 'block'
        div9.style.display = 'block'
    } else {
        i7.style.display = 'block'
        i8.style.display = 'none'
        div9.style.display = 'none'
    }
}
function calcular() {
    if (inicio1.value.length == 0 || fim1.value.length == 0 || passo1.value.length == 0) {
        if (errorcheck < 1) {
            div5.innerHTML = '<p id="perror">Há campos vazios, preencha-os.</p>'
            errorcheck += 1
        }
        else {
            document.getElementById('perror').style.display = 'none';
        }
    } else {
        let i = Number(inicio1.value);
        let f = Number(fim1.value);
        let p = Number(passo1.value);
        div5.innerHTML = `<p id="pcontando">Contando</p>`;
        if (i <= f) {
            for (let c = i; c <= f; c += p) {

                if (c >= f) {
                    div5.innerHTML += `<p class="pc">${c}</p>`;
                } else {
                    div5.innerHTML += `<p class="pc">${c} -></p> `;
                }
            }
        } else {
            for (let c = i; c >= f; c = c - p) {
                if (c <= f) {
                    div5.innerHTML += `<p class="pc">${c}</p>`;
                } else {
                    div5.innerHTML += `<p class="pc">${c} -></p> `;
                }
            }
        }
    }
}
let div7 = document.getElementById('div7')
let num1 = document.getElementById('num')
let sel1 = document.getElementById('select1')
let errorcheck2 = 0
function selectfunction() {
    sel1.options.length = 0
    if (num1.value.length == 0) {
        if (errorcheck2 < 1) {
            document.getElementById('perror2').style.display = 'block';
            errorcheck2 += 1
        }
        else {
            document.getElementById('perror2').style.display = 'none';
        }
    } else {
        let n1 = Number(num1.value)
        let c = 1
        while (c <= 10) {
            let opcao = document.createElement('option')
            opcao.text = `${n1} x ${c} = ${n1 * c}`
            sel1.appendChild(opcao)
            c += 1
        }
    }
}
let num2 = document.getElementById('num2')
let div10 = document.getElementById('div10')
let div11 = document.getElementById('div11')
const lista1 = []
let errorcheck3 = 0
let div12 = document.getElementById('div12')
function add() {
    n2 = Number(num2.value)
    if (num2.value.length == 0) {
        if (errorcheck3 < 1) {
            div10.innerHTML = `<p id="adderror">Há campos vazios, preencha-os.</p>`
            errorcheck3 += 1
        } else {
            adderror.style.display = 'none'
        }
    } else {
        if (n2 >= 0 && n2 <= 100) {
            if (lista1.indexOf(Number(num2.value)) == -1) {
                div11.innerHTML += `<p>Valor ${n2} adicionado.</p>`
                lista1.push(n2)
                console.log(lista1)
            } else {
                div10.innerHTML = `<p id="adderror">Digite números que estão na lista</p>`
            }
        } else {
            div10.innerHTML = `<p id="adderror">Digite NÚMEROS entre 0 e 100.</p>`
        }
    }
}
function finalizar() {
    if (lista1.length == 0) {
        div10.innerHTML = `<p id="adderror">Digite algo válido para prosseguir</p>`
    } else {
        adderror.style.display = 'none'

        div12.innerHTML = ''
        let maior = lista1[0]
        let menor = lista1[0]
        let soma = 0
        let media = 0
        let tot = lista1.length
        for (let pos in lista1) {
            soma += lista1[pos]
            if (lista1[pos] > maior) {
                maior = lista1[pos]
            }
            if (lista1[pos] < menor) {
                menor = lista1[pos]
            }
        }
        div12.innerHTML += `<p class="final1" id="final11">Há ${lista1.length} elementos.</p>`
        div12.innerHTML += `<p class="final1" >O maior número é ${maior}</p>`
        div12.innerHTML += `<p class="final1">O menor número é ${menor}</p>`
        div12.innerHTML += `<p class="final1">A soma é ${soma}</p>`
        media = soma / tot
        div12.innerHTML += `<p class="final1">A média é ${media}</p>`
    }
}
