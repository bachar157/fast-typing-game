"use strict";

import { startGame, restartGame, togglePauseResume, checkInput } from './gameLogic.js';
import { playButtonClick } from './sounds.js';

    const startButton = document.getElementById('startButton');
    const restartButton = document.getElementById('restartButton');
    const resumeButton = document.getElementById('resumeButton');
    const wordInput = document.getElementById('wordInput');
    const togglePauseResumeButton = document.getElementById('togglePauseResume');
    const closeModalButton = document.getElementById('closeModal');

    
    if (togglePauseResumeButton) {
        togglePauseResumeButton.addEventListener('click', () => {
            playButtonClick();
            togglePauseResume();
        });
    }
    
    startButton.addEventListener('click', () => {
        playButtonClick();
        startGame();
    });
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            restartGame(); // Call the function to restart the game
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

   

    wordInput.addEventListener('input', checkInput);
