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

// Get question on DOM load
document.addEventListener('DOMContentLoaded', getQuestion(questions));

// Next button click
nextBtn.addEventListener('click', validate);

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

// Hide question from user
function hideQuestion(){
  inputGroup.style.opacity = 0;
  inputLabel.style.marginLeft = 0;
  inputProgress.style.width = 0;
  inputProgress.style.transition = 'none';
  inputGroup.style.border = null;
};

// Transform to create shake motion
function transform(x,y){
  console.log(x,y)
  formBox.style.transform = `translate(${x}px, ${y}px)`;
}

// Validate field
function validate(){
  // Make sure pattern matches if there's one
  if(!inputField.value.match(questions[position].pattern || /.+/)){
    inputFail();
  } else {
    inputPass();
  }
}

// Field input fail
function inputFail(){
  formBox.className = 'error';
  // Repeat shake motion - set i to number of shakes
  for(let i = 0; i < 6; i++){
    setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
  };

  setTimeout(transform, shakeTime * 6, 0, 0);
  inputField.focus();
}

// Field input pass
function inputPass(){
  formBox.className = '';
  setTimeout(transform, shakeTime * 0, 0, 10);
  setTimeout(transform, shakeTime * 1, 0, 0);

  // Increment position
  position++;

  // If new question, hide current and get next
  if(questions[position]){
    hideQuestion();
    getQuestion(questions);
  } else {
    // remove if no more questions
    hideQuestion();
    formBox.className = 'close';
    progress.style.width = '100%';

    // For complete
    formComplete();
  }
}