import { getEntryField } from './js/entry-field.js';
import { buttons, getKeyborsField } from './js/keybord.js';

const keybordSection = `<section class="keybord-section">
  ${getEntryField()}
  ${getKeyborsField(buttons.join(' '))}
</section>`;

document.body.insertAdjacentHTML('afterend', keybordSection);
