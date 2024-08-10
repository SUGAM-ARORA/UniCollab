// Elements
const textToType = document.getElementById('text-to-type');
const inputArea = document.getElementById('input-area');
const timeDisplay = document.getElementById('time');
const errorsDisplay = document.getElementById('errors');
const wpmDisplay = document.getElementById('wpm');
const resetButton = document.getElementById('reset');

// Variables
let timer;
let time = 0;
let errors = 0;
let isTyping = false;
let offsetCheck = "";

const textTyping = ["The quick brown fox jumps over the lazy dog.",
 "A journey of a thousand miles begins with a single step.",
 "She sells seashells by the seashore, where the sand is soft and warm.",
 "The rain in Spain stays mainly in the plain, causing the fields to remain green",
 "To be or not to be, that is the question, pondered the thoughtful philosopher.",
 "In the middle of difficulty lies opportunity, waiting for those who seek it.",
 "The early bird catches the worm, but the second mouse gets the cheese.",
 "Beneath the stars, the vast ocean whispered secrets to the moonlit sky.",
 "Innovation distinguishes between a leader and a follower in every industry.",
 "The beauty of the world lies in the diversity of its people and cultures."
];

const randomIndexText = () => { 
    const rIndex = Math.floor(Math.random() * (10));
    textToType.innerText = offsetCheck = textTyping[rIndex];
};

document.addEventListener("DOMContentLoaded",() => {
    randomIndexText();
});

// Functions
function startTimer() {
    timer = setInterval(() => {
        time++;
        timeDisplay.innerText = time;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function calculateWPM() {
    const wordsTyped = inputArea.value.trim().split(' ').length;
    const wpm = Math.round((wordsTyped / time) * 60);
    return wpm;
}

function resetTest() {
    stopTimer();
    time = 0;
    errors = 0;
    isTyping = false;
    inputArea.value = '';
    timeDisplay.innerText = time;
    errorsDisplay.innerText = errors;
    wpmDisplay.innerText = 0;
    inputArea.disabled = false;
    randomIndexText();
    inputArea.focus();
}

// Event Listeners
inputArea.addEventListener('input', () => {
    if (!isTyping) {
        isTyping = true;
        startTimer();
    }
    
    const typedText = inputArea.value;
    const typedTextLength = typedText.length;
    
    if (typedText === offsetCheck) {
        stopTimer();
        inputArea.disabled = true;
        wpmDisplay.innerText = calculateWPM();
    }
    
    if (typedTextLength > 0) {
        if (typedText[typedTextLength - 1] !== offsetCheck[typedTextLength - 1]) {
            errors++;
            errorsDisplay.innerText = errors;
        }
    }
});

resetButton.addEventListener('click', resetTest);

// Initialize
resetTest();
