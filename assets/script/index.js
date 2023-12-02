import { startGame, restartGame, togglePauseResume, checkInput } from './gameLogic.js';
import { playButtonClick } from './sounds.js';

    const startButton = document.getElementById('startButton');
    const restartButton = document.getElementById('restartButton');
    const resumeButton = document.getElementById('resumeButton');
    const pauseButton = document.getElementById('pauseButton');  // Add a pause button to your HTML if you haven't already
    const wordInput = document.getElementById('wordInput');
    const togglePauseResumeButton = document.getElementById('togglePauseResume');
    
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

    restartButton.addEventListener('click', () => {
        playButtonClick();
        restartGame();
    });

    resumeButton.addEventListener('click', () => {
        playButtonClick();
        resumeGame();
    });

   

    wordInput.addEventListener('input', checkInput);
