//Outline for Note taking app

//Main Features:

//Able to take persistent/convenient on-the-fly notes or reminders
//Idea is to immediately be presented with a text input box
//Button to enter note/can use enter key to save not
//Needs to be easy to navigate to new note or to previous notes somehow - Imperative
const textInput = document.getElementById('textInput');

// Set the initial font size
const initialFontSize = 124; // You can adjust this value

textInput.style.fontSize = initialFontSize + 'px';

textInput.addEventListener('input', () => {
    textInput.style.height = 'auto';
    textInput.style.height = textInput.scrollHeight + 'px';

    // Check for line breaks (new lines) in the text content
    const text = textInput.innerText;
    const newLines = (text.match(/\n/g) || []).length; // Count the number of new lines

    // Calculate the adjusted font size based on the number of new lines
    const maxSize = initialFontSize; // Maximum font size
    const minSize = 16; // Minimum font size
    const scaleFactor = 7; // Adjust this value to control resizing speed

    const newSize = maxSize - scaleFactor * newLines;
    const clampedSize = Math.max(minSize, newSize);

    textInput.style.fontSize = clampedSize + 'px';
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


