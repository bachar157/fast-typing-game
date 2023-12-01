import { startGame, restartGame, checkInput } from './gameLogic.js';
import { playButtonClick } from './sounds.js';

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const restartButton = document.getElementById('restartButton');
    const wordInput = document.getElementById('wordInput');

    startButton.addEventListener('click', () => {
        playButtonClick();
        startGame();
    });

    restartButton.addEventListener('click', () => {
        playButtonClick();
        restartGame();
    });

    wordInput.addEventListener('input', checkInput);
});