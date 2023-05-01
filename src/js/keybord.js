let russianLetters = [['ё', [1, '!'], [2, '\"'], [3, '№'], [4, ';'], [5, '%'], [6, ':'], [7, '?'], [8, '*'], [9, '('], [0, ')'], ['-', '_'], ['=', '+'], 'Backspace'], ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', ['\\', '|'], 'Delete'], ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'], ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ['.', ','], 'ArrowUp', 'Shift'], ['ControlLeft', 'Meta', 'Alt', 'Space', 'Alt', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']];

let inglishLetters = [[['`', '~'], [1, '!'], [2, '@'], [3, '#'], [4, '$'], [5, '%'], [6, '^'], [7, '&'], [8, '*'], [9, '('], [0, ')'], ['-', '_'], ['=', '+'], 'Backspace'], ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ['[', '{'], [']', '}'], ['\\', '|'], 'Delete'], ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', [';', ':'], ['\'', '"'], 'Enter'], ['ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', ['/', '?'], 'ArrowUp', 'ShiftRight'], ['ControlLeft', 'Meta', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']]


function getKeyboardHTML(array) {
  return array.map(it => `<div class="keybord-section__row">${it.map(el => {
    if (Array.isArray(el)) {
      return `<button id=${el[0]} id='${el[1]}' class="keybord-section__btn"><span>${el[0]}</span><span class="keybord-section__shift-show" readonly>${el[1]}</span></button>`
    } else {
      let btn;
      if (el.length === 1) {
        btn = `<button id=${el} class="keybord-section__btn">${el.toUpperCase()}</button>`
      } else if (el === 'Space') {
        btn = `<button id=${el} class="keybord-section__btn keybord-section__btn--service keybord-section__btn--space">${' '}</button>`
      } else if (el === 'ArrowUp') {
        btn = `<button tabindex="-1" id=${el} class="keybord-section__btn keybord-section__btn--service">&uarr;</button>`
      } else if (el === 'ArrowLeft') {
        btn = `<button tabindex="-1" id=${el} class="keybord-section__btn keybord-section__btn--service">&larr;</button>`
      } else if (el === 'ArrowDown') {
        btn = `<button id=${el} class="keybord-section__btn keybord-section__btn--service">&darr;</button>`
      } else if (el === 'ArrowRight') {
        btn = `<button id=${el} class="keybord-section__btn keybord-section__btn--service">&rarr;</button>`
      } else if (el === 'ControlLeft' || el === 'ControlRight') {
        btn = `<button id=${el} class="keybord-section__btn keybord-section__btn--service">Ctrl</button>`
      } else if (el === 'ShiftLeft' || el === 'ShiftRight') {
        btn = `<button id=${el} class="keybord-section__btn keybord-section__btn--service">Shift</button>`
      } else if (el === 'Delete') {
        btn = `<button id=${el} class="keybord-section__btn keybord-section__btn--service">Del</button>`
      } else if (el === 'AltLeft' || el === 'AltRight') {
        btn = `<button id=${el} class="keybord-section__btn keybord-section__btn--service">Alt</button>`
      } else {
        btn = `<button id=${el} class="keybord-section__btn keybord-section__btn--service"">${el}</button>`
      }
      return btn;
    }
  }).join('')}</div>`).join('\n');
  
}

function getKeyborsField(letters) {
  return `<div class="keybord-section__wrap">${letters}</div>`
}

export {russianLetters, inglishLetters, getKeyboardHTML, getKeyborsField}
