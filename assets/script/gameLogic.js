"use strict";


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

export function togglePauseResume() {
    if (isGamePaused) {
        // Resume game logic
        resumeGame();
        document.getElementById('togglePauseResume').textContent = 'Pause';
    } else {
        // Pause game logic
        pauseGame();
        document.getElementById('togglePauseResume').textContent = 'Resume';
    }
}
export function startGame() {
    resetGame();
    gameInterval = setInterval(updateGame, 1000);
    playBackgroundMusic();
}

export function pauseGame() {
    clearInterval(gameInterval);
    isGamePaused = true;
    stopBackgroundMusic(); 
}

export function resumeGame() {
    if (isGamePaused) {
        gameInterval = setInterval(updateGame, 1000);
        isGamePaused = false;
        playBackgroundMusic(); 
    }
}

export function restartGame() {
    resetGame();
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

function resetGame() {
    score = 0;
    timeLeft = 99;
    isGamePaused = false;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    selectRandomWord();
    wordInput.disabled = false;
    wordInput.value = '';
    gameOverModal.style.display = 'none';
}
