const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.getElementsByClassName('parrafo');
const pid = document.getElementById('pid');
const input = document.querySelector('input');


//console.log(h1);
//console.log(p);
//console.log(parrafo);
//console.log(pid);
//console.log(input);

console.log({
    h1,
    p,
    parrafo,
    pid,
    input,
})

p.innerHTML = "Nuevo titulo"; //agrega codigo html a una etiqueta con innerHTML
p.innerText = "Nuevo Titulo con innerText"; // agrega string desde js como texto
p.getAttribute('nombre'); // --> titulo
p.setAttribute('nombre', 'title'); // --> setea el atributo nombre de titulo a title

p.classList.add('titulaso'); // --> class="tit titulaso"
p.classList.remove('tit'); // --> class="titulaso"
p.classList.toggle('titulaso'); // --> hace un toggle de la clase
p.classList.contains('titulaso'); // --> devuelve true o false dependiendo si la clase existe

input.value ="456";

const img = document.createElement('img');
img.setAttribute('src', './img/messi.jpg');
console.log(img);
pid.innerHTML = "";
pid.append(img);