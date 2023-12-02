import { words } from './words.js';
import { playKeyPress, playBackgroundMusic, stopBackgroundMusic } from './sounds.js';

let currentWordIndex;
let score = 0;
let timeLeft = 99;
let gameInterval;
let isGamePaused = false;
const wordDisplay = document.getElementById('wordPrompt');
const wordInput = document.getElementById('wordInput');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('time');
const gameOverModal = document.getElementById('gameOverModal');
const finalScore = document.getElementById('finalScore');

export function startGame() {
    if (isGamePaused) {
        // Resuming the game
        isGamePaused = false;
        gameInterval = setInterval(updateGame, 1000);
        playBackgroundMusic();
    } else {
        // Starting a new game
        score = 0;
        timeLeft = 99;
        selectRandomWord();
        wordInput.disabled = false;
        scoreDisplay.textContent = score;
        timerDisplay.textContent = timeLeft;
        playBackgroundMusic();
        gameInterval = setInterval(updateGame, 1000);
    }
}

export function pauseGame() {
    clearInterval(gameInterval);
    isGamePaused = true;
    stopBackgroundMusic();
}

export function restartGame() {
    clearInterval(gameInterval);
    stopBackgroundMusic();
    startGame();
}

export function checkInput() {
    playKeyPress();
    if (wordInput.value.trim().toLowerCase() === words[currentWordIndex].toLowerCase()) {
        score++;
        scoreDisplay.textContent = score;
        wordInput.value = '';
        selectRandomWord();
    }
}

function selectRandomWord() {
    currentWordIndex = Math.floor(Math.random() * words.length);
    wordDisplay.textContent = words[currentWordIndex];
    console.log("New word selected:", words[currentWordIndex]); // Debugging line

}

function updateGame() {
    if (timeLeft > 0) {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
    } else {
        endGame();
    }
}

function endGame() {
    clearInterval(gameInterval);
    wordInput.disabled = true;
    stopBackgroundMusic();
    finalScore.textContent = score;
    gameOverModal.style.display = 'block';
}
