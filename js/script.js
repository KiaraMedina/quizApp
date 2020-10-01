const datosBase = [{
        question: 'What is my favorite serie?',
        a: 'Hannah Montana',
        b: 'El pricipe del rap',
        c: 'A todo ritmo Chicago',
        d: 'Hechiceros de Waverly Place',
        e: 'Lived and Maddie',

        correct: 'a'
    },
    {
        question: 'When is my birthday?',
        a: 'November 5',
        b: 'November 6',
        c: 'December 5',
        d: 'December 6',
        e: 'April 6',

        correct: 'd'
    },
    {
        question: 'What is my hobby?',
        a: 'Programing in the laptop',
        b: 'Sing song in english',
        c: 'Play videogames',
        d: 'Make a cake',
        e: 'Go to the movies',

        correct: 'a'
    },
    {
        question: 'Who is my pet?',
        a: 'Gia',
        b: 'Dalki',
        c: 'Muñeco',
        d: 'Blanca',
        e: 'Petizo',

        correct: 'a'
    },
    {
        question: 'What is my dream?',
        a: 'Be a great professional',
        b: 'Have a big house',
        c: 'Travel to USA',
        d: 'Travel to Japon',
        e: 'Sing with Demi Lovato',

        correct: 'b'

    }
];

const preguntasP = document.getElementById('preguntas')
const answerD = document.querySelectorAll('.answer');
const questionP = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submit = document.getElementById('submit');

let preguntasDatos = 0;
let score = 0;


function loadQuestion() {

    deselectAnswer();
    const preguntas = datosBase[preguntasDatos];

    questionP.innerText = preguntas.question;
    a_text.innerText = preguntas.a;
    b_text.innerText = preguntas.b;
    c_text.innerText = preguntas.c;
    d_text.innerText = preguntas.d;
    e_text.innerText = preguntas.e;


}
loadQuestion();

function getSelected() {



    let answer = undefined;

    answerD.forEach(function(answerDo) {

        if (answerDo.checked) {
            answer = answerDo.id;
        }
    });

    return answer;

}

function deselectAnswer() {
    answerD.forEach(function(answerDo) {
        answerDo.checked = false;
    });
}

submit.addEventListener("click", () => {


    const answer = getSelected();
    console.log(answer);
    if (answer) {
        if (answer === datosBase[preguntasDatos].correct) {

            score++;
        }

        preguntasDatos++;
        if (preguntasDatos < datosBase.length) {
            loadQuestion();
        } else {

            if (score < 5) {
                preguntasP.innerHTML = `
            <h3 class="text">You answered correctly at ${score}/ ${datosBase.length} question</h3>
            <br><img class="oyea1" src="./img/sad.gif" alt="">
            <button onclick="location.reload()"> Reload</button>
            `;
            } else {

                preguntasP.innerHTML = `
                    <h3 class="text">You answered correctly at ${score}/ ${datosBase.length} question</h3>
                    <br><img class="oyea" src="./img/download.gif" alt="">
                    <button onclick="location.reload()"> Reload</button>
                    `;
            }

        }
    }


});