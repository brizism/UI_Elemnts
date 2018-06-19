// Questions Array
const questions = [
  { question: 'Enter Your First Name' },
  { question: 'Enter Your Last Name' },
  { question: 'Enter Your Email', pattern: /\S+@\S+\.\S+/ },
  { question: 'Create a Password', type: 'password' }
];

// Transition Times
const shakeTime = 100; // Shake Transition Time
const switchTime = 200; // Transition Between Questions

// Init Position At First Question
let position = 0;

// Init DOM Elements
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

// EVENTS
document.addEventListener('DOMContentLoaded', getQuestion(questions));

// FUNCTIONS

// Get question from array & add to markup
function getQuestion(arr){
  // Get current question
  inputLabel.innerHTML = arr[position].question;
  // Get current type
  inputField.type = arr[position].type || 'text';
  // Get current answer
  inputField.value = arr[position].answer || '';
  // Focus on element
  inputField.focus();

  // Set progress bar width - variable to the questions length
  progress.style.width = (position * 100) / questions.length + '%';

  // Add user icon OR back arrow depending on questions
  prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';

  showQuestion();
};

// Display question to user
function showQuestion() {
  inputGroup.style.opacity = 1;
  // inputProgress.style.transition = '';
  inputProgress.style.width = '100%';
};

