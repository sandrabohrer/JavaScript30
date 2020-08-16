// put the keyCode values into an array
const keys = [65, 83, 68, 70, 71, 72, 74, 75, 76];

document.addEventListener("keydown", event => {
    for (var k = 0; k < keys.length; k++) {
        if (event.keyCode === keys[k]) {
            document.querySelector(`audio[data-key="`+keys[k]+`"]`).play();
        }
    }
    
});