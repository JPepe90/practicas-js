const titulo = document.getElementById('tit');
const input1 = document.getElementById('calculo1');
//const input1 = document.querySelector('#input1');
const input2 = document.getElementById('calculo2');
const btnCalcular = document.getElementById('btnCalcular');
const pRes = document.querySelector('#resultado');

btnCalcular.addEventListener('click', btnOnClick);
input1.addEventListener('change', input1Log);

function input1Log(){
    console.log(input1.value);
}

function btnOnClick() {
    var concate = undefined;

    console.log('Escuchando el evento del click');
    concate = input1.value + input2.value;
    console.log(concate);
    pRes.innerText = "El resultado de la concatenación es: " + concate;
}

