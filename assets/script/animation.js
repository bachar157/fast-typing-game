"use strict";

import {
  onEvent,
  getElement,
  select,
  selectAll,

} from "./utilty.js";

  const startButton = getElement('startButton');
  const gameOverModal = getElement('gameOverModal');
  const countdownModal = getElement('countdownModal');
  const countdownDisplay =getElement('countdown');
  const wordInput = getElement('wordInput');
  const wordPrompt = getElement('wordPrompt');
  const scoreContainer =getElement('scoreContainer');
  const timerContainer = getElement('timerContainer');
  const backgroundMusic =getElement('backgroundMusic');
  const buttonSound = getElement('buttonSound');
  const keyboardSound = getElement('keyboardSound');
  const togglePauseResumeButton = getElement('togglePauseResume');


  // Initially hide all game elements except the start button
  gameOverModal.style.display = 'none';
  countdownModal.style.display = 'none';
  wordInput.style.display = 'none';
  wordPrompt.style.display = 'none';
  scoreContainer.style.display = 'none';
  timerContainer.style.display = 'none';
  restartButton.style.display = 'none';
  resumeButton.style.display = 'none';
  togglePauseResumeButton.style.display = 'none';


  // Function to show game elements
  function showGameElements() {
    wordInput.style.display = 'block';
    wordPrompt.style.display = 'block';
    scoreContainer.style.display = 'block';
    timerContainer.style.display = 'block';
    restartButton.style.display = 'block';
    resumeButton.style.display = 'none';
    togglePauseResumeButton.style.display = 'block';

  }

  // Function to show the countdown modal
  function showCountdownModal() {
    countdownModal.style.display = 'flex';
  }

  // Function to hide the countdown modal
  function hideCountdownModal() {
    countdownModal.style.display = 'none';
  }

  // Function to update the countdown display
  function updateCountdownDisplay(count) {
    countdownDisplay.textContent = count;
  }

  // Function to start the countdown
  function startCountdown() {
    let count = 3;
    updateCountdownDisplay(count); // Set initial countdown value
    showCountdownModal();

    const countdownInterval = setInterval(() => {
      count -= 1;
      updateCountdownDisplay(count);
      
      if (count <= 0) {
        clearInterval(countdownInterval);
        hideCountdownModal();
        startGame();
      }
    }, 1000);
  }

  // Function to start the game
  function startGame() {
    showGameElements();
    wordInput.disabled = false;
    wordInput.focus();
    backgroundMusic.play();
    // Initialize game elements like timer, score, word prompt, etc.
    // Example: wordPrompt.textContent = 'Example Word';
  }

  // Event listener for the start button
  startButton.addEventListener('click', () => {
    startButton.style.display = 'none'; // Hide start button
    buttonSound.play();
    startCountdown();
  });

  // Event listener for the close button on the game over modal
  getElement('closeModal').addEventListener('click', () => {
    gameOverModal.style.display = 'none';
    startButton.style.display = 'none'; // Show start button again
    // Optionally, reset game state here
    // ...
  });

  
