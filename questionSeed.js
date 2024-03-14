// seeders/questionsSeeder.js
const mongoose = require('mongoose');
const Question = require('./models/questionModel');

mongoose.connect('mongodb+srv://nidhinrobertstackup:nidhin17@cluster0.2e8avzp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

const questions = [
    {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        answers: ['getElementbyId()', 'getElementsByClassName()', 'Both A and B', 'None of the above'],
        correctAnswer: 0
    },
    {
        question: 'Which one of the following also known as Conditional Expression:',
        answers: ['Alternative to if-else', 'Switch statement', 'If-then-else statement', 'immediate if'],
        correctAnswer: 3
    },
    {
        question: 'In JavaScript, what is a block of statement?',
        answers: ['Shows a warning', 'Prompts to complete the statement', 'Throws an error', 'Ignores the statements'],
        correctAnswer: 3
    },
    {
        question: 'The "function" and " var" are known as:',
        answers: ['Keywords', 'Data types', 'Declaration statements', 'Prototypes'],
        correctAnswer: 2
    },
    {
        question: 'Which one of the following is the correct way for calling the JavaScript code?',
        answers: ['Preprocessor', 'Triggering Event', 'RMI', 'Function/Method'],
        correctAnswer: 3
    },
    {
        question: 'Which of the following type of a variable is volatile?',
        answers: ['Mutable variable', 'Dynamic variable', 'Volatile variable', 'Immutable variable'],
        correctAnswer: 0
    },
    {
        question: ' In the JavaScript, which one of the following is not considered as an error:',
        answers: ['Syntax error', 'Missing of semicolons', 'Division by zero', 'Missing of Bracket'],
        correctAnswer: 2
    },
    
    
   
];

async function seedQuestions() {
    try {
        await Question.deleteMany();
        await Question.insertMany(questions);

        console.log('Questions added successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding questions:', error);
        process.exit(1);
    }
}

seedQuestions();
