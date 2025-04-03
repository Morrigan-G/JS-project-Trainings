// Variables - переменные

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.qoute')
let person = document.querySelector('.person')

const quotes = [{
    quote:`"ОБЖ я не учил, зато дома подрочил"`,
    person: `© Гиппократ`
},{
    quote:`"Почесал яйца, понюхал руку"`,
    person: `© Том Форд`
}, {
    quote:`"Уроки учат только лохи, пацаны ебут ладохи"`,
    person: `© Джонни Синс`
},{
    quote:`"Со смыслом"`,
    person: `© Конфуций`
}, {
    quote:`"Зубов бояться - в рот не давать"`,
    person: `© Джейсон Стетхем`
}, {
    quote:`"Уууу сука"`,
    person: `© Муххамед Али`
}, 
]

btn.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person

 })