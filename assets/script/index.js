"use strict";

import { startGame, restartGame, togglePauseResume, checkInput } from './gameLogic.js';
import { playButtonClick } from './sounds.js';

    const startButton = document.getElementById('startButton');
    const restartButton = document.getElementById('restartButton');
    const resumeButton = document.getElementById('resumeButton');
    const wordInput = document.getElementById('wordInput');
    const togglePauseResumeButton = document.getElementById('togglePauseResume');
    const closeModalButton = document.getElementById('closeModal');
    const showScoresButton = document.getElementById('showScoresButton'); 
    const scoresListElement = document.getElementById('scoresList'); // Container for the scores

    let scores = JSON.parse(localStorage.getItem('scores')) || [];


    
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
     function displayTopScores() {
        const scoresListElement = document.getElementById('scoresList');
        scoresListElement.innerHTML = ''; 
      
        scores.slice(0, 9).forEach((score, index) => {
          const listItem = document.createElement('li');
          listItem.setAttribute('data-rank', index + 1); // Set the rank as a data attribute
          listItem.innerHTML = `#${index + 1} Hits: ${score.hits}, Percentage: ${score.percentage}% - ${score.date}`;
          scoresListElement.appendChild(listItem);
        });
      }
      showScoresButton.addEventListener('click', () => {
        playButtonClick();
        displayTopScores();
        toggleScoreListDisplay() 
    });
     function createScore() {
        return {
          hits: score,
          percentage: Math.round((score / words.length) * 100), 
          date: new Date().toLocaleString(),
        };
      }
     
     
      function toggleScoreListDisplay() {
        if (scoresListElement.style.display === 'none' || scoresListElement.style.display === '') {
            displayTopScores();
            scoresListElement.style.display = 'block';
        } else {
            scoresListElement.style.display = 'none'; 
        }
    }
    
     

    wordInput.addEventListener('input', checkInput);
