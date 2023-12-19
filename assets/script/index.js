"use strict";

import { startGame, restartGame, togglePauseResume, checkInput, resumeGame } from './gameLogic.js';
import { playButtonClick } from './sounds.js';

// Getting references to the DOM elements
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const resumeButton = document.getElementById('resumeButton');
const wordInput = document.getElementById('wordInput');
const togglePauseResumeButton = document.getElementById('togglePauseResume');
const closeModalButton = document.getElementById('closeModal');
const showScoresButton = document.getElementById('showScoresButton');
const scoresListElement = document.getElementById('scoresList'); // Container for the scores

// Initialize scores from localStorage
let scores = JSON.parse(localStorage.getItem('scores')) || [];

// Event listeners for buttons
if (togglePauseResumeButton) {
    togglePauseResumeButton.addEventListener('click', () => {
        playButtonClick();
        togglePauseResume();
    });
}

startButton.addEventListener('click', () => {
    scores = JSON.parse(localStorage.getItem('scores')) || [];
    playButtonClick();
    startGame();
});

if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
        restartGame();
    });
}

restartButton.addEventListener('click', () => {
    playButtonClick();
    restartGame();
});

resumeButton.addEventListener('click', () => {
    playButtonClick();
    resumeGame();
});

showScoresButton.addEventListener('click', () => {
    playButtonClick();
    toggleScoreListDisplay();
});

// Function to display top scores
function displayTopScores() {
    scoresListElement.innerHTML = '';
    scores.slice(0, 9).forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `#${index + 1} Hits: ${score.hits}, Percentage: ${score.percentage}% - ${score.date}`;
        scoresListElement.appendChild(listItem);
    });
}

// Function to create a score object
function createScore(score, wordsLength) {
    return {
        hits: score,
        percentage: Math.round((score / wordsLength) * 100),
        date: new Date().toLocaleString(),
    };
}

// Function to toggle the display of the score list
function toggleScoreListDisplay() {
    if (scoresListElement.style.display === 'none' || scoresListElement.style.display === '') {
        displayTopScores();
        scoresListElement.style.display = 'block';
    } else {
        scoresListElement.style.display = 'none';
    }
}

// Listener for word input
wordInput.addEventListener('input', checkInput);

// Set initial visibility state of the score list
document.addEventListener('DOMContentLoaded', () => {
    toggleScoreListDisplay();
});
