let russianLetters = [];

let inglishLetters = [['`', '~'], [1, '!'], [2, '@'], [3, '#'], [4, '$'], [5, '%'], [6, '^'], [7, '&'], [8, '*'], [9, '('], [0, ')'], ['-', '_'], ['=', '+'], 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ['[', '{'], [']', '}'], ['\\', '|'], 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', [';', ':'], ['\'', '"'], 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'ArrowUp', 'Ctrl', 'Meta', 'Alt', 'Space', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

const buttons = inglishLetters.map(el => Array.isArray(el) ? `<button class="keybord-section__btn"><span>${el[0]}</span><span class="keybord-section__shift-show">${el[1]}</span></button>` : `<button class="keybord-section__btn">${el}</button>`);

function getKeyborsField(letters) {
  return `<div class="keybord-section__wrap">${letters}</div>`
}

export {buttons, getKeyborsField}