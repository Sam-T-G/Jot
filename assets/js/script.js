//Outline for Note taking app

//Main Features:

//Able to take persistent/convenient on-the-fly notes or reminders
//Idea is to immediately be presented with a text input box
//Button to enter note/can use enter key to save not
//Needs to be easy to navigate to new note or to previous notes somehow - Imperative
const textInput = document.getElementById('textInput');

function resizeText() {
    const text = textInput.innerText;
    const maxSize = 124; //maximum font size
    const minSize = 16; //minimum font size
    const scaleFactor = 0.5; //resizing speed

    const newSize = maxSize - scaleFactor * text.length;
    const clampedSize = Math.max(minSize, newSize);

    textInput.style.fontSize = clampedSize + 'px';
}

textInput.addEventListener('input', () => {
    textInput.style.height = 'auto';
    textInput.style.height = textInput.scrollHeight + 'px';
    resizeText();
});

textInput.focus();



//Perhaps be able to quickly rank priority? 

//Able to create simple quick reminders

//Able to see a quickly organized list or visual of notes/reminders

//Hourly Calendar

//Daily Calendar

//Weekly Calendar

//Monthly+ Calendar

//Future implementation of login/accounts?

//Future backend implementation perhaps migration to React?


