const questions=[{
    question:"What is the pH value of the human body?",
    answers:[
        {text:"9.2 to 9.8",correct:false},
        {text:"7.0 to 7.8",correct:true},
        {text:"6.1 to 6.3",correct:false},
        {text:"5.4 to 5.6",correct:false},
    ]
},
{
    question:"Which of the following are called 'Key Industrial animals'?",
    answers:[
        {text:"Producers",correct:false},
        {text:"Tertiary consumers",correct:false},
        {text:"Primary consumers",correct:true},
        {text:"None of these",correct:false},
    ]
},
{
    question:"Which of the given amendments made it compulsory for the president to consent to the constitutional Amendment bills?",
    answers:[
        {text:"27th",correct:false},
        {text:"29th",correct:false},
        {text:"24th",correct:true},
        {text:"22th",correct:false},
    ]
},
{
    question:"Which of the given devices is used for counting blood cells?",
    answers:[
        {text:"Hmelethometer",correct:false},
        {text:"Hamosytometer",correct:false},
        {text:"Spyscometer",correct:false},
        {text:"Hemocytometer",correct:true},
    ]
},
{
    question:"Which of the given compounds is used to make fireproof clothing??",
    answers:[
        {text:"Aluminum Chloride",correct:false},
        {text:"Aluminum Sulphate",correct:true},
        {text:"Magnesium Chloride",correct:false},
        {text:"Magnesium Sulphate",correct:false},
    ]
}];

let questionElement=document.getElementById("question");
let ansButton=document.getElementById("answer-buttons");
let Next=document.getElementById("nextbtn");

let currentQsIndex=0;
let score=0;
function startQuiz(){
    currentQsIndex=0;
    score=0;
    Next.style.display="inline";
    showQuestion();
};
function showQuestion(){
    let currentQs=questions[currentQsIndex]
    let qsNo=currentQsIndex+1;
    questionElement.innerText=qsNo+". "+currentQs.question;
    currentQs.answers.forEach(answer=>{
        const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        ansButton.appendChild(button);
    });
};
startQuiz();