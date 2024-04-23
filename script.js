const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
    }
];

let currentQuestion = 0;
let score = 0;
let studentName = "";
let studentRoll = "";
let studentBatch = "";
let studentSection = "";

function startQuiz() {
    studentName = document.getElementById('student-name').value;
    studentRoll = document.getElementById('student-roll').value;
    studentBatch = document.getElementById('student-batch').value;
    studentSection = document.getElementById('student-section').value;
    if (studentName.trim() === "" || studentRoll.trim() === "" || studentBatch.trim() === "" || studentSection.trim() === "") {
        alert("Please enter all student details!");
        return;
    }
    document.getElementById('student-details').style.display = "none";
    document.getElementById('quiz').style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    questionElement.textContent = quizData[currentQuestion].question;
    optionsElement.innerHTML = '';
    quizData[currentQuestion].options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.onclick = () => chooseOption(option);
        optionsElement.appendChild(optionButton);
    });
}

function chooseOption(option) {
    if (option === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = "none";
    document.getElementById('result').style.display = "block";
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<h2>Quiz Result</h2>
                               <p>Student Name: ${studentName}</p>
                               <p>Roll Number: ${studentRoll}</p>
                               <p>Batch: ${studentBatch}</p>
                               <p>Section: ${studentSection}</p>
                               <p>You scored ${score} out of ${quizData.length}!</p>`;
}
