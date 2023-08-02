const quizData = [
    {
        question: 'Who was Anakin Skywalker\'s padawan?',
        a: 'Obi-Wan Kenobi',
        b: 'Qui-Gon Jinn',
        c: 'Ahsoka Tano',
        d: 'Darth Maul', 
        correct: 'c'
    }, {
        question: 'What is of Count Dooku\'s first Sith apprentice?',
        a: 'Darth Maul',
        b: 'Asajj Ventress',
        c: 'General Grevious',
        d: 'Anakin Skywalker',
        correct: 'b'
    }, {
        question: 'What is the name of Darth Maul\'s brother, who becomes his apprentice?',
        a: 'Embo',
        b: 'Jango Fett',
        c: 'Asajj Ventress',
        d: 'Savage Opress',
        correct: 'd'
    }, {
        question: 'What year did TV Series Star Wars: The Clone Wars first air',
        a: '1977',
        b: '1999',
        c: '2008',
        d: '2015',
        correct: 'c'
    }, {
        question: 'Who was Count Dooku\'s Jedi padawan?',
        a: 'Qui-Gon Jinn',
        b: 'Obi-Wan Kenobi',
        c: 'Plo Koon',
        d: 'Mace Windu',
        correct: 'a'
    }, {
        question: 'Which Droid did Anakin Skywalker build?',
        a: 'R2-D2',
        b: 'C-3PO',
        c: '4-LOM',
        d: 'BD-1',
        correct: 'b'
    }, {
        question: 'Padme Amidala is the senator of what planet?',
        a: 'Tatooine',
        b: 'Coruscant',
        c: 'Bespin',
        d: 'Naboo',
        correct: 'd'
    }, {
        question: 'What Planet was home to the Jedi Council?',
        a: 'Bespin',
        b: 'Alderaan',
        c: 'Corellia',
        d: 'Coruscant',
        correct: 'c'
    }, {
        question: 'Who said \"Had you said the word, I would have left the Jedi order.\"',
        a: 'Mace Windu',
        b: 'Anakin Skywalker',
        c: 'Obi-Wan Kenobi',
        d: 'Ahsoka Tano',
        correct: 'c'
    }, {
        question: 'What clone protocol is used to label all Jedi as traitors of the republic?',
        a: 'Order 5',
        b: 'Order 37',
        c: 'Order 65',
        d: 'Order 66',
        correct: 'd'
    }, 
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});