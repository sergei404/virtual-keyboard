import { getEntryField } from './js/entry-field.js';
import { russianLetters, inglishLetters, getKeyboardHTML, getKeyborsField } from './js/keybord.js';
import './js/input.js'
let language = 'ru'
let buttons = language === 'en' ? getKeyboardHTML(inglishLetters) : getKeyboardHTML(russianLetters);
console.log(getKeyboardHTML);

const keybordSection = `<section class="keybord-section">
  ${getEntryField()}
  ${getKeyborsField(buttons)}
</section>`;

document.body.insertAdjacentHTML('afterend', keybordSection);

document.querySelector('.keybord-section__wrap').addEventListener('click', (evt) => {
  if (evt.target.children.length) {
    console.log(evt.target.children.length);
    // document.getElementById('field').value += evt.target.children[0].textContent;
  } else {
    document.getElementById('field').value += evt.target.textContent
  }
  
})
