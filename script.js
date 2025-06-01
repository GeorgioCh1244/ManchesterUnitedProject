const facts = [
            "Manchester United was founded in 1878 as Newton Heath LYR Football Club.",
            "Old Trafford has been United’s home since 1910.",
            "Sir Alex Ferguson won 13 Premier League titles with Manchester United.",
            "The club has won the Champions League three times: 1968, 1999, and 2008.",
            "Manchester United holds the record for the most English top-flight titles.",
            "Ryan Giggs made 963 appearances for Manchester United, the most in club history."
        ];

        function showFact() {
            const randomIndex = Math.floor(Math.random() * facts.length);
         alert(facts[randomIndex]);
        }
const questions =[
    { questions:"How many Champions League has Manchester United won?",answer:"3"},
    {questions:"Who is the current manager?",answer:"Ruben Amorin"},
    {questions: "What is the name of the Manchester united Stadium?",answer:"Old Trafford"},
    {questions:"Who wears the number 8 in the current squad?",answer:"Bruno Fernandes"},
    {questions: "Who is the only french player in the current squad?",answer:"Yoro"},
];
let currentQuestion=0;
function loadQuestion(){
    document.getElementById("question").innerText= questions[currentQuestion].questions;
}
function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.trim();
    let correctAnswer = questions[currentQuestion].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("result").innerText = "✅ Correct!";
    } else {
        document.getElementById("result").innerText = "❌ Wrong! The correct answer is: " + correctAnswer;
    }

    // Move to next question
    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(() => {
            document.getElementById("result").innerText = "";
            document.getElementById("answer").value = ""; // Clear input field
            loadQuestion(); // Load next question
        }, 2000);
    } else {
        document.getElementById("question").innerText = "Quiz Complete!";
        document.getElementById("answer").style.display = "none";
        document.querySelector("button").style.display = "none";
    }
}
const triviaData = [
    {
        query: "Which stadium is Manchester United's home?",
        images: ["old Trafford.jpeg", "Santiago Bernabéu.jpeg", "camp nou.jpeg"],
        correctChoice: 0
    },
    {
        query: "Who is Manchester United's current manager?",
        images: ["Ancelotti.jpeg", "Amorin.jpeg", "Pep.jpeg"],
        correctChoice: 1
    },
    {
        query: "Which trophy represents the Premier League title?",
        images: ["Fa.jpeg", "UCL.jpeg", "Premier.jpeg"],
        correctChoice: 2
    }
];
let currentStep = 0;

function displayQuestion() {
    document.getElementById("quizPrompt").innerText = triviaData[currentStep].query;

    document.getElementById("pic1").src = triviaData[currentStep].images[0];
    document.getElementById("pic2").src = triviaData[currentStep].images[1];
    document.getElementById("pic3").src = triviaData[currentStep].images[2];
}
function validateSelection(selectedIndex) {
    if (selectedIndex === triviaData[currentStep].correctChoice) {
        document.getElementById("feedback").innerText = "✅ Correct!";
    } else {
        document.getElementById("feedback").innerText = "❌ Wrong! Try again.";
    }

    currentStep++;

    if (currentStep < triviaData.length) {
        setTimeout(() => {
            document.getElementById("feedback").innerText = "";
            displayQuestion();
        }, 2000);
      } else {
        document.getElementById("quizPrompt").innerText = "Quiz Complete!";
        document.getElementById("imageGrid").style.display = "none";
    }
}
window.onload = displayQuestion;
window.onload = loadQuestion;
document.addEventListener("DOMContentLoaded", displayQuestion);