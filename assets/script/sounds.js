const keyPressSound = new Audio('./assets/audio/keyboard.mp3');
const buttonClickSound = new Audio('./assets/audio/button_sound.wav');
const backgroundMusic = new Audio('./assets/audio/background_music.mp3');

export function playKeyPress() {
    keyPressSound.play();
}

export function playButtonClick() {
    buttonClickSound.play();
}

export function playBackgroundMusic() {
    backgroundMusic.play();
}

export function stopBackgroundMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}
