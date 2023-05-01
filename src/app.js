import { getEntryField } from "./js/entry-field.js";
import {
  russianLetters,
  inglishLetters,
  getKeyboardHTML,
  getKeyborsField,
} from "./js/keybord.js";

function getLanguageSymbols(language) {
  localStorage.removeItem("language");
  localStorage.setItem("language", language);
  return language === "en"
    ? getKeyboardHTML(inglishLetters)
    : getKeyboardHTML(russianLetters);
}

document.body.insertAdjacentHTML(
  "afterend",
  `<section class="keybord-section">
    <h2>ОС - Windows, смена языка Ctrl(ControlLeft) + Alt(AltLeft)</h2>
    ${getEntryField()}
    ${getKeyborsField(getLanguageSymbols("en"))}
  </section>`
);

function changeLanguage(language = "en") {
  document
    .querySelector(".keybord-section")
    .insertAdjacentHTML(
      "beforeEnd",
      getKeyborsField(getLanguageSymbols(language))
    );
}

const field = document.getElementById("field");
field.focus();

function removeBackgroundColor() {
  [...document.querySelectorAll(".keybord-section__btn")].forEach(
    (el) => (el.style.backgroundColor = "")
  );
}

let events = new Set();

addEventListener("keydown", (evt) => {
  if (evt.key === " ") {
    events.add(evt.code);
    field.value += evt.key;
  } else if (evt.key === "Tab") {
    events.add(evt.code);
    field.value += "\t";
  } else if (evt.key === "Control") {
    events.add(evt.code);
    field.value += "";
  } else if (evt.key === "Shift" || evt.key === "Alt") {
    events.add(evt.code);
    field.value += "";
  } else {
    events.add(evt.key);
  }
  removeBackgroundColor();
  field.focus();
});

window.addEventListener("keyup", (evt) => {
  if (events.has("ControlLeft") && events.has("AltLeft")) {
    console.log();
    if (localStorage.getItem("language") === "en") {
      document
        .querySelector(".keybord-section")
        .removeChild(document.querySelector(".keybord-section__wrap"));
      changeLanguage("ru");
      keyboard()
    } else {
      document
        .querySelector(".keybord-section")
        .removeChild(document.querySelector(".keybord-section__wrap"));
      changeLanguage("en");
      keyboard()
    }
  }

  events.forEach((el) => {
    if (el.length === 1) {
      el = el.toLowerCase();
    }
    let btn = document.getElementById(el);
    if (btn) {
      btn.style.backgroundColor = "#edaeda";
    }
  });

  if (evt.getModifierState("CapsLock")) {
    document
      .getElementById("CapsLock")
      .classList.add("keybord-section__btn--capslock");
    document.getElementById("CapsLock").style.backgroundColor = "";
  } else if (!evt.getModifierState("CapsLock")) {
    document
      .getElementById("CapsLock")
      .classList.remove("keybord-section__btn--capslock");
    document.getElementById("CapsLock").style.backgroundColor = "";
    events.clear();
  } else {
    events.clear();
  }

  field.focus();
});

function textbox()
{
    var ctl = document.getElementById('field');
    var startPos = ctl.selectionStart;
    var endPos = ctl.selectionEnd;
    return startPos + ", " + endPos;
}

function keyboard() {
  document
    .querySelector(".keybord-section__wrap")
    .addEventListener("click", (evt) => {
      let count = 0
      if (
        evt.target instanceof HTMLButtonElement ||
        evt.target.parentElement instanceof HTMLButtonElement
      ) {
        removeBackgroundColor();
        let btn = evt.target;
        if (evt.target.children.length) {
          console.log(btn.children[0].textContent.toLowerCase());
          field.value += btn.children[0].textContent.toLowerCase();
          btn.style.backgroundColor = "#edaeda";
          field.focus();
        }
        else if (btn.id === 'Backspace') {
          field.value = field.value.slice(0, field.value.length - 1);
          btn.style.backgroundColor = "#edaeda";
          field.focus();
        }
        else if (btn.id === 'Delete') {
          let pos = document.getElementById('field').selectionEnd;
          field.value = field.value.slice(0, pos) + field.value.slice(pos + 1);
          document.getElementById('field').selectionEnd = pos
          btn.style.backgroundColor = "#edaeda";
          field.focus();
        }
        else if (btn.id === 'Tab') {
          field.value += '\t'
          btn.style.backgroundColor = "#edaeda";
          field.focus();
        }
        else if (btn.id === 'AltLeft' || btn.id === 'ShiftLeft' || btn.id === 'ControlLeft' || btn.id === 'Meta' || btn.id === 'AltRight' || btn.id === 'ShiftRight' || btn.id === 'ControlRight') {
          field.value += ''
          btn.style.backgroundColor = "#edaeda";
          field.focus();
        } else if (btn.id === 'CapsLock') {
          btn.classList.toggle('keybord-section__btn--capslock')
          field.focus();
        } else if (btn.id === 'Enter') {
          field.value += ''
          btn.style.backgroundColor = "#edaeda";
          field.focus();
        } else if (btn.id === 'ArrowLeft') {
          document.getElementById('field').selectionEnd -= 1
          field.value += ''
          btn.style.backgroundColor = "#edaeda";
          field.focus();
        } else if (btn.id === 'ArrowRight') {
          document.getElementById('field').selectionStart += 1
          field.value += ''
          btn.style.backgroundColor = "#edaeda";
          field.focus();
        } else if (btn.id === 'ArrowUp') {
          document.getElementById('field').selectionEnd -= document.getElementById('field').selectionEnd
          field.value += ''
          btn.style.backgroundColor = "#edaeda";
          field.focus();
        } else if (btn.id === 'ArrowDown') {
          document.getElementById('field').selectionEnd = document.getElementById('field').selectionStart = document.getElementById('field').value.length
          field.value += ''
          btn.style.backgroundColor = "#edaeda";
          field.focus();
        }
        else {
          if (document.getElementById('CapsLock').classList.contains('keybord-section__btn--capslock')) {
            field.value += btn.textContent.toUpperCase()
          } else {
            field.value += btn.textContent.toLowerCase();
          }
          field.focus();
          btn.style.backgroundColor = "#edaeda";
        }
      }
    });
}

keyboard()
