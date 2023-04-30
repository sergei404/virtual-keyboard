import { getEntryField } from './js/entry-field.js';
import { buttonsEn, getKeyborsField } from './js/keybord.js';
import './js/input.js'

const keybordSection = `<section class="keybord-section">
  ${getEntryField()}
  ${getKeyborsField(buttonsEn)}
</section>`;

document.body.insertAdjacentHTML('afterend', keybordSection);

document.querySelector('.keybord-section__wrap').addEventListener('click', (evt) => {
  if (evt.target.children.length) {
    document.getElementById('field').value += evt.target.children[0].textContent;
  } else {
    document.getElementById('field').value += evt.target.textContent
  }
  
})
