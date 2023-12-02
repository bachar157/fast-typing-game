document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  const gameOverModal = document.getElementById('gameOverModal');
  const countdownModal = document.getElementById('countdownModal');
  const countdownDisplay = document.getElementById('countdown');
  const wordInput = document.getElementById('wordInput');
  const wordPrompt = document.getElementById('wordPrompt');
  const scoreContainer = document.getElementById('scoreContainer');
  const timerContainer = document.getElementById('timerContainer');
  const backgroundMusic = document.getElementById('backgroundMusic');
  const buttonSound = document.getElementById('buttonSound');
  const keyboardSound = document.getElementById('keyboardSound');

  // Initially hide all game elements except the start button
  gameOverModal.style.display = 'none';
  countdownModal.style.display = 'none';
  wordInput.style.display = 'none';
  wordPrompt.style.display = 'none';
  scoreContainer.style.display = 'none';
  timerContainer.style.display = 'none';
  restartButton.style.display = 'none';
  resumeButton.style.display = 'none';

  // Function to show game elements
  function showGameElements() {
    wordInput.style.display = 'block';
    wordPrompt.style.display = 'block';
    scoreContainer.style.display = 'block';
    timerContainer.style.display = 'block';
    restartButton.style.display = 'block';
    resumeButton.style.display = 'block';
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
  document.getElementById('closeModal').addEventListener('click', () => {
    gameOverModal.style.display = 'none';
    startButton.style.display = 'block'; // Show start button again
    // Optionally, reset game state here
    // ...
  });

  // Event listener for word input (to play keyboard sound)
  wordInput.addEventListener('input', () => {
    keyboardSound.play();
  });
});
