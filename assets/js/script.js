//Outline for Note taking app

//Main Features:

//Able to take persistent/convenient on-the-fly notes or reminders
//Idea is to immediately be presented with a text input box
//Button to enter note/can use enter key to save not
//Needs to be easy to navigate to new note or to previous notes somehow - Imperative
const textInput = document.getElementById('textInput');

textInput.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});

//Perhaps be able to quickly rank priority? 

//Able to create simple quick reminders

//Able to see a quickly organized list or visual of notes/reminders

//Hourly Calendar

//Daily Calendar

//Weekly Calendar

//Monthly+ Calendar

//Future implementation of login/accounts?

//Future backend implementation perhaps migration to React?


