import inquirer from "inquirer";

async function Quizesgame() {
    
console.log('General Knowledge Quizes Game');

    let score = 0;
    const question1 = await inquirer.prompt([{
    name : 'question1',
    type : "list",
    message : 'Q:No:1 Which is the capital city of Pakistan?',
    choices : ["A. Karachi" , "B. Lahore" , "C. Islamabad"]
    }]);

    switch(question1.question1){
    case "C. Islamabad" :
    console.log('Correct');
    score++;
    break;

    default :
    console.log('Option C is correct.');
    break};
           
    const question2 = await inquirer.prompt([{
    name : 'question2',
    type : "list",
    message : "Q:No:2 What is the tallest mountain in the world?",
    choices : ["A. K2" , "B. Mount Everest" , "C. Denali" ] }])

    switch (question2.question2) {
    case "B. Mount Everest":
    console.log('Correct');
    score++;
    break;
       
    default:
    console.log('Option B Mount Everest is correct. ');
    break;}

    const question3 = await inquirer.prompt([{
    name : 'question3',
    type : "list",
    message : "Q:No:3 What is the world's largest ocean?",
    choices : ["A. Atlantic Ocean" , "B. Indian Ocean" , "C. Pacific Ocean" ] }]);
    
    
    switch (question3.question3) {

    case "C. Pacific Ocean":
    console.log('Correct');
    score ++;
    break;
                
    default:
    console.log('Option C Pacific Ocean is correct. ');
    break;
    }
                
    const question4 = await inquirer.prompt([{
    name : 'question4',
    type : "list",
    message : "Q:No:4 What is the hottest planet in the solar system?",
    choices : ["A. Mars" , "B. Venus" , "C. Jupiter" ] }]);
        
        
    switch (question4.question4) {

    case "B. Venus":
    console.log('Correct');
    score ++;
    break;
                    
    default:
    console.log('Option B Venus is correct. ');
    break;
    }

    console.log('Thanks for Playing');
    
    if(score === 1){
    console.log(" You got 1 out of 4 questions correct. Keep practicing!");}

    if (score === 2) {
    console.log('Well done! You got 2 out of 4 questions correct!');}

    if (score === 3) {
    console.log('Well done! You got 3 out of 4 questions correct!');}
                    
    if (score === 4){
    console.log('Congratulations! You got all 4 questions correct!');}         
  }

Quizesgame()
    
    