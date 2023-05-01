import { getEntryField } from "./js/entry-field.js";
import {
  russianLetters,
  inglishLetters,
  getKeyboardHTML,
  getKeyborsField,
} from "./js/keybord.js";

function getLanguageSymbols(language = "en") {
  localStorage.removeItem("language");
  localStorage.setItem("language", language);
  return language === "en"
    ? getKeyboardHTML(inglishLetters)
    : getKeyboardHTML(russianLetters);
}

//${getKeyborsField(getLanguageSymbols())}
document.body.insertAdjacentHTML(
  "afterend",
  `<section class="keybord-section">
    <h2>ОС - Windows, смена языка Ctrl(ControlLeft) + Alt(AltLeft)</h2>
    ${getEntryField()}
    ${getKeyborsField(getLanguageSymbols())}
  </section>`
);

//document.querySelector(".keybord-section").insertAdjacentHTML("afterend", getKeyborsField(getLanguageSymbols()));

const field = document.getElementById("field");
field.focus();

function removeBackgroundColor() {
  [...document.querySelectorAll(".keybord-section__btn")].forEach(
    (el) => (el.style.backgroundColor = "")
  );
}

document
  .querySelector(".keybord-section__wrap")
  .addEventListener("click", (evt) => {
    if (
      evt.target instanceof HTMLButtonElement ||
      evt.target.parentElement instanceof HTMLButtonElement
    ) {
      removeBackgroundColor();
      let btn = evt.target;
      if (evt.target.children.length) {
        field.value += btn.children[0].textContent.toLowerCase();
        btn.style.backgroundColor = "#edaeda";
        field.focus();
      } else {
        field.value += btn.textContent.toLowerCase();
        field.focus();
        btn.style.backgroundColor = "#edaeda";
      }
    }
  });

let events = new Set();

addEventListener("keydown", (evt) => {
  if (evt.key === " ") {
    events.add(evt.code);
    field.value += evt.key;
  } else if (evt.key === "Control") {
    events.add(evt.code);
    field.value += "";
  } else if (evt.key === "Shift") {
    events.add(evt.code);
    field.value += "";
  } else if (evt.key === "Alt") {
    events.add(evt.code);
    field.value += "";
  } else {
    events.add(evt.key);
  }
  removeBackgroundColor();
  field.focus();
});

window.addEventListener("keyup", (evt) => {
  events.forEach((el) => {
    if (el.length === 1) {
      el = el.toLowerCase();
    }
    let btn = document.getElementById(el);
    if (btn) {
      btn.style.backgroundColor = "#edaeda";
    }
  });

  if (events.has("ControlLeft") && events.has("AltLeft")) {
    console.log();
    if (localStorage.getItem('language') === 'en') {
      document.querySelector(".keybord-section").removeChild(document.querySelector(".keybord-section__wrap"))
      document.querySelector(".keybord-section").insertAdjacentHTML("beforeEnd", getKeyborsField(getLanguageSymbols('ru')))
    } else {
      document.querySelector(".keybord-section").removeChild(document.querySelector(".keybord-section__wrap"))
      document.querySelector(".keybord-section").insertAdjacentHTML("beforeEnd", getKeyborsField(getLanguageSymbols('en')))
    }
  }

  
  if (events.has("CapsLock") && events.size === 1) {
    document.getElementById("CapsLock").style.backgroundColor = "#edaeda";
  } else if (events.has("CapsLock") && events.size > 1) {
    events.clear();
  } else {
    events.clear();
  }

  field.focus();
});
