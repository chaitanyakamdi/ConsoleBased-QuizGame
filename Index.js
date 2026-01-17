const questions = [
    {
        Question : 'What is the capital of France ?',
        Options : ['A) Berlin','B) Madrid','C) Paris','D) Lisbon'],
        Answer : 'C',
    },
    {
        Question : 'What is the the sum of 2 + 5 ?',
        Options : ['A) 5','B) 7','C) 9','D) 1'],
        Answer : 'B',
    },
    {
        Question : 'Which is the Largest Planet Of the Solar System ?',
        Options : ['A) Earth','B) Mars','C) Neptune','D) Moon'],
        Answer : 'B',
    },
    {
        Question : 'Who Is the father of maharashtra ?',
        Options : ['A) Chhatrapati Shivaji Maharaj','B) Chhatrapati Sambhaji Maharaj','C) Tanhaji Malusare','D) Jivaji'],
        Answer : 'A',
    }
] 

let score = 0;

function startQuiz(){
    console.log("Welcome to the Quiz Game!");
    console.log("Answer each question by typing the correct option letter (A,B,C,D)");
    console.log("Good Luck \n");


    questions.forEach((q,index)=>{
        console.log(`Question ${index+1} : ${q.Question}`);
        q.Options.forEach(option => console.log(option));

        const userAnswer = prompt("Enter Your Answer").toUpperCase();

        if(userAnswer === q.Answer){
            console.log("Correct \n");
            score++;
        }else{
            console.log("wrong \n");
        }
    });

    console.log("Quiz is Over! Your final score is : ", score);

};



setTimeout(startQuiz,2000);

//this timeout is just given to open the console in that time 