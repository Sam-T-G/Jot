//Outline for Note taking app

//Main Features:

//Able to take persistent/convenient on-the-fly notes or reminders
//Idea is to immediately be presented with a text input box
//Button to enter note/can use enter key to save note
//Needs to be easy to navigate to new note or to previous notes somehow - Imperative
const textInput = document.getElementById('textInput');

const initialFontSize = 124; // Initial font size
const maxLineLength = 40; // Maximum characters per line
const scaleFactor = 3; // Adjust this value to control resizing speed

textInput.style.fontSize = initialFontSize + 'px';

textInput.addEventListener('input', () => {
    textInput.style.height = 'auto'; 
    textInput.style.height = textInput.scrollHeight + 'px';

    const text = textInput.innerText;
    const lines = text.split('\n');
    let newFontSize = initialFontSize;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].length > maxLineLength) {
            const additionalChars = lines[i].length - maxLineLength;
            newFontSize -= scaleFactor * additionalChars;
        }
    }

    const clampedSize = Math.max(16, newFontSize);
    textInput.style.fontSize = clampedSize + 'px';
});

textInput.focus();

//Pehaps need to refine note taking functionality further. Need to optimize thresholds of when text gets consolidated into lower font and automatically line breaks.
//Additionally, need responsive feature in which text content re-formats spacing based off of manual line breaks.


//Perhaps be able to quickly rank priority? 

//Able to create simple quick reminders

//Able to see a quickly organized list or visual of notes/reminders

//Hourly Calendar

//Daily Calendar

//Weekly Calendar

//Monthly+ Calendar

//Future implementation of login/accounts?

//Future backend implementation perhaps migration to React?


