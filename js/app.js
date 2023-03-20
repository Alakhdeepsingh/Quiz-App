// array ke andar object hai ( this is called array of objects )
//we have written const because we don't want to change data in future or in other scope
const quizData = [{
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python", 
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1993",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }
];

let index = 0;

const loadQuestions = () =>{
    const data = quizData[index]
    console.log(data);
}
































