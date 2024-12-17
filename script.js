const questionElement = document.getElementById("question");
const answersButton  = document.getElementById("answer-button");
const SubmitButton = document.getElementById("Submit-Btn");
const warningmsg = document.getElementById("warningmsg");


const questions = [
    {
        question: "Which is the largest animal in the world ?",
        answers:[
            { text : "shark", correct: false},
            { text : "Blue Whale", correct: true},
            { text : "Elephant", correct: false},
            { text : "Giraffe", correct: false},
        ]
    }
];

let currentQuestionIndex = 0;
let Score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    Score = 0;
    SubmitButton.innerHTML = "Submit"
    showQuestion();
}

function showQuestion(){

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." +currentQuestion.question;
    console.log("currentQuestion.answers",currentQuestion.answers)


currentQuestion.answers.forEach(answer => {
    const buttons = document.createElement("button");   
    buttons.innerHTML = answer.text;
    buttons.classList.add("btn");
    answersButton.appendChild(buttons);
    if(answer.correct){                                     
        buttons.dataset.correct = answer.correct;
    }
    buttons.addEventListener("click" , selectAnswer);

    });

}



function selectAnswer(e){
    const selectedtBtn = e.target;
    const iscorrect = selectedtBtn.dataset.correct == "true";
    
    if(iscorrect){
        selectedtBtn.classList.add("correct");
        const ptag = document.createElement("p")
        ptag.textContent = 'correct answer'
        ptag.style.color = 'green'
        warningmsg.appendChild(ptag)
        // alert("Correct! Well done.");
        
    } else {    
        selectedtBtn.classList.add("incorrect");
        alert("Incorrect! Please try again.");
    }

    Array.from(answersButton.children).forEach(buttons =>{
        if(buttons.dataset.correct == "true"){
             buttons.classList.add("correct");   
              
         }
         
          buttons.disabled = true;
     SubmitButton.style.display = "block";
        }
    )};

startQuiz();




