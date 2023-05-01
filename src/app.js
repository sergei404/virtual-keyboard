import { getEntryField } from './js/entry-field.js';
import { russianLetters, inglishLetters, getKeyboardHTML, getKeyborsField } from './js/keybord.js';
import './js/input.js'


let language = 'en'
let buttons = language === 'en' ? getKeyboardHTML(inglishLetters) : getKeyboardHTML(russianLetters);


const keybordSection = `<section class="keybord-section">
  ${getEntryField()}
  ${getKeyborsField(buttons)}
</section>`;

document.body.insertAdjacentHTML('afterend', keybordSection);

function removeBackgroundColor() {
  [...document.querySelectorAll('.keybord-section__btn')].forEach(el => el.style.backgroundColor = '');
}

// document.querySelector('.keybord-section__wrap').addEventListener('click', (evt) => {
//   if (evt.target instanceof HTMLButtonElement || evt.target.parentElement instanceof HTMLButtonElement) {
//      removeBackgroundColor()
//      let btn = evt.target
//      if (evt.target.children.length) {
//       document.getElementById('field').value += btn.children[0].textContent.toLowerCase();
//       btn.style.backgroundColor = '#edaeda'
//     } else {
//       document.getElementById('field').value += btn.textContent.toLowerCase()
//       btn.style.backgroundColor = '#edaeda'
//     }
//   }
// })

let events = new Set()

addEventListener("keydown", (evt) => {
  console.log(evt.key);
  if (evt.key === ' ') {
    events.add(evt.code)
  } else if (evt.key === 'Control') {
    events.add(evt.code)
  } else if (evt.key === 'Shift') {
    events.add(evt.code)
  } else {
    events.add(evt.key)
  }
  removeBackgroundColor()
  console.log(events[0]);
});


window.addEventListener('keyup', (evt) => {
  events.forEach((el) => {
    if (el.length === 1) {
      el = el.toLowerCase()
    }
    let btn = document.getElementById(el);
    if (btn) {
      btn.style.backgroundColor = '#edaeda'
    }
  })
  events.clear()
})

// addEventListener("keydown", function(event) {
//   if (event.keyCode == 86)
//     document.body.style.background = "violet";
// });
// addEventListener("keyup", function(event) {
//   if (event.keyCode == 86)
//     document.body.style.background = "";
// });
