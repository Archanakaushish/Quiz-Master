const questions = [

{
    question: "Which of the following is an example of a 'NP-complete' problem in computational theory?",
    options: ["Sorting a list", "Traveling Salesman Problem", "Finding the maximum in an array", "Matrix multiplication"],
    answer: "Traveling Salesman Problem"
},


{
    question: "Which of the following is an example of a 'NP-complete' problem in computational theory?",
    options: ["Sorting a list", "Traveling Salesman Problem", "Finding the maximum in an array", "Matrix multiplication"],
    answer: "Traveling Salesman Problem"
},


{
    question: "Which of the following is an example of a 'NP-complete' problem in computational theory?",
    options: ["Sorting a list", "Traveling Salesman Problem", "Finding the maximum in an array", "Matrix multiplication"],
    answer: "Traveling Salesman Problem"
},


{
    question: "Which of the following is an example of a 'NP-complete' problem in computational theory?",
    options: ["Sorting a list", "Traveling Salesman Problem", "Finding the maximum in an array", "Matrix multiplication"],
    answer: "Traveling Salesman Problem"
},


{
    question: "Which of the following is an example of a 'NP-complete' problem in computational theory?",
    options: ["Sorting a list", "Traveling Salesman Problem", "Finding the maximum in an array", "Matrix multiplication"],
    answer: "Traveling Salesman Problem"
},


{
    question: "Which of the following is an example of a 'NP-complete' problem in computational theory?",
    options: ["Sorting a list", "Traveling Salesman Problem", "Finding the maximum in an array", "Matrix multiplication"],
    answer: "Traveling Salesman Problem"
},

    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Leo Tolstoy"],
        answer: "William Shakespeare"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What is the default port for HTTP?",
        options: ["80", "22", "443", "8080"],
        answer: "80"
    },
    {
        question: "Which of the following is a version control system?",
        options: ["Git", "Docker", "AWS", "Jenkins"],
        answer: "Git"
    },
    {
        question: "Which HTML element is used to define a header for a document?",
        options: ["<header>", "<head>", "<h1>", "<section>"],
        answer: "<header>"
    }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-btn');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';  // Clear previous options
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is " + currentQuestion.answer);
    }
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("You've completed the quiz!");
    }
    nextButton.style.display = 'none';
});

loadQuestion();
