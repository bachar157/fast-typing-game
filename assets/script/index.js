console.log('hi')

import { startGame, restartGame } from './gameLogic.js';
import { playButtonClick } from './sounds.js';

    const startButton = document.getElementById('startButton');
    const restartButton = document.getElementById('restartButton');
    const resumeButton = document.getElementById('resumeButton');
    const wordInput = document.getElementById('wordInput');

    startButton.addEventListener('click', () => {
        playButtonClick();
        startGame();
    });

    restartButton.addEventListener('click', () => {
        playButtonClick();
        restartGame();
    });

    resumeButton.addEventListener('click', () => {
        playButtonClick();
        // Implement resume logic if needed
    });

    wordInput.addEventListener('input', checkInput);

    selectRandomWord()