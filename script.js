const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')
let resetAll = document.querySelector('#resetAllInput')
let inputs = document.querySelectorAll('input')
hitung.addEventListener('click', function() {
    let a = alas.value
    let t = tinggi.value
    let l = 0.5*a*t
    output.innerHTML = `Luas segitiga dari alas ${a} cm dan tinggi ${t} cm adalah ${l} cm2`
})

function reset() {
    output.innerHTML = '';
}

resetAll.addEventListener('click', () => {
    // inputs.forEach((input) => input.value = '')
    inputs.forEach(function(input) {
        input.value = ''
    })
})