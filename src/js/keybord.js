let russianLetters = [['ё', [1, '!'], [2, '"'], [3, '№'], [4, ';'], [5, '%'], [6, ':'], [7, '?'], [8, '*'], [9, '('], [0, ')'], ['-', '_'], ['=', '+'], 'Backspace'], ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', ['\\', '|'], 'Del'], ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'], ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ['.', ','], '&uarr;', 'Shift'], ['Ctrl', 'Meta', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;']];

let inglishLetters = [[['`', '~'], [1, '!'], [2, '@'], [3, '#'], [4, '$'], [5, '%'], [6, '^'], [7, '&'], [8, '*'], [9, '('], [0, ')'], ['-', '_'], ['=', '+'], 'Backspace'], ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ['[', '{'], [']', '}'], ['\\', '|'], 'Del'], ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', [';', ':'], ['\'', '"'], 'Enter'], ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', ['/', '?'], '&uarr;', 'Shift'], ['Ctrl', 'Meta', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;']]


function getKeyboardHTML(array) {
  return array.map(it => `<div class="keybord-section__row">${it.map(el => {
    if (Array.isArray(el)) {
      return `<button class="keybord-section__btn"><span>${el[0]}</span><span class="keybord-section__shift-show">${el[1]}</span></button>`
    } else {
      let btn;
      if (el.length === 1) {
        btn = `<button data-btn=${el} class="keybord-section__btn">${el.toUpperCase()}</button>`
      } else if (el === 'Space') {
        btn = `<button data-btn=${el} class="keybord-section__btn keybord-section__btn--service keybord-section__btn--space">${' '}</button>`
      } else {
        btn = `<button data-btn=${el} class="keybord-section__btn keybord-section__btn--service">${el}</button>`
      }
      return btn;
    }
  }).join('')}</div>`).join('\n');
  
}

function getKeyborsField(letters) {
  return `<div class="keybord-section__wrap">${letters}</div>`
}

export {russianLetters, inglishLetters, getKeyboardHTML, getKeyborsField}
''