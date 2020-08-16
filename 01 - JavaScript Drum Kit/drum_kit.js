// put the keyCode values into an array
const keys = [65, 83, 68, 70, 71, 72, 74, 75, 76];

// on keydown, play audio and add class name "playing"
document.addEventListener("keydown", event => {
    for (var k = 0; k < keys.length; k++) {
        if (event.keyCode === keys[k]) {
            const audioKey = document.querySelector(`audio[data-key="`+keys[k]+`"]`);
            audioKey.currentTime = 0;
            audioKey.play();
            let divKey = document.querySelector(`div[data-key="`+keys[k]+`"]`);
            if (divKey.className === 'key') {
                divKey.classList.add('playing');
            }
        }
    }
});

// on keyup, remove class name "playing"
document.addEventListener("keyup", event => {
    for (var k = 0; k < keys.length; k++) {
        if (event.keyCode === keys[k]) {
            let divKey = document.querySelector(`div[data-key="`+keys[k]+`"]`);
            if (divKey.className === 'key playing') {
                divKey.className = 'key';
            }
        }
    }
});