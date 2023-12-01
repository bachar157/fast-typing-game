document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  const gameOverModal = document.getElementById('gameOverModal');
  const countdownModal = document.getElementById('countdownModal');
  const countdownDisplay = document.getElementById('countdown');
  const wordInput = document.getElementById('wordInput');
  const wordPrompt = document.getElementById('wordPrompt');

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
    wordInput.disabled = false;
    wordInput.focus();
    // Initialize game elements like timer, score, word prompt, etc.
    // ...
    // Example: wordPrompt.textContent = 'Example Word';
  }

  // Event listener for the start button
  startButton.addEventListener('click', () => {
    startCountdown();
  });

  // Event listener for the close button on the game over modal
  document.getElementById('closeModal').addEventListener('click', () => {
    gameOverModal.style.display = 'none';
    // Optionally, reset game state here
    // ...
  });

  // Uncomment audio when needed
  // const backgroundMusic = document.getElementById('backgroundMusic');
  // backgroundMusic.play();
});
