let shiftActive = false;
let currentLanguage = 'english';

const keyboardLayouts = {
    english: {
        normal: [
            // Function keys
            [
                { name: 'Esc', keycode: '0x29' },
                { name: 'F1', keycode: '0x3A' },
                { name: 'F2', keycode: '0x3B' },
                { name: 'F3', keycode: '0x3C' },
                { name: 'F4', keycode: '0x3D' },
                { name: 'F5', keycode: '0x3E' },
                { name: 'F6', keycode: '0x3F' },
                { name: 'F7', keycode: '0x40' },
                { name: 'F8', keycode: '0x41' },
                { name: 'F9', keycode: '0x42' },
                { name: 'F10', keycode: '0x43' },
                { name: 'F11', keycode: '0x44' },
                { name: 'F12', keycode: '0x45' },
            ],
            // Row 1
            [
                { name: '`', keycode: '0x35' },
                { name: '1', keycode: '0x1E' },
                { name: '2', keycode: '0x1F' },
                { name: '3', keycode: '0x20' },
                { name: '4', keycode: '0x21' },
                { name: '5', keycode: '0x22' },
                { name: '6', keycode: '0x23' },
                { name: '7', keycode: '0x24' },
                { name: '8', keycode: '0x25' },
                { name: '9', keycode: '0x26' },
                { name: '0', keycode: '0x27' },
                { name: '-', keycode: '0x2D' },
                { name: '=', keycode: '0x2E' },
                { name: 'Backspace', keycode: '0x2A' },
            ],
            // Row 2
            [
                { name: 'Tab', keycode: '0x2B' },
                { name: 'q', keycode: '0x14' },
                { name: 'w', keycode: '0x1A' },
                { name: 'e', keycode: '0x08' },
                { name: 'r', keycode: '0x15' },
                { name: 't', keycode: '0x17' },
                { name: 'y', keycode: '0x1C' },
                { name: 'u', keycode: '0x18' },
                { name: 'i', keycode: '0x0C' },
                { name: 'o', keycode: '0x12' },
                { name: 'p', keycode: '0x13' },
                { name: '[', keycode: '0x2F' },
                { name: ']', keycode: '0x30' },
                { name: '\\', keycode: '0x31' },
            ],
            // Row 3
            [
                { name: 'Caps Lock', keycode: '0x39', disabled: true },
                { name: 'a', keycode: '0x04' },
                { name: 's', keycode: '0x16' },
                { name: 'd', keycode: '0x07' },
                { name: 'f', keycode: '0x09' },
                { name: 'g', keycode: '0x0A' },
                { name: 'h', keycode: '0x0B' },
                { name: 'j', keycode: '0x0D' },
                { name: 'k', keycode: '0x0E' },
                { name: 'l', keycode: '0x0F' },
                { name: ';', keycode: '0x33' },
                { name: "'", keycode: '0x34' },
                { name: 'Enter', keycode: '0x28' },
            ],
            // Row 4
            [
                { name: 'Shift', keycode: '0xE1' },
                { name: 'z', keycode: '0x1D' },
                { name: 'x', keycode: '0x1B' },
                { name: 'c', keycode: '0x06' },
                { name: 'v', keycode: '0x19' },
                { name: 'b', keycode: '0x05' },
                { name: 'n', keycode: '0x11' },
                { name: 'm', keycode: '0x10' },
                { name: ',', keycode: '0x36' },
                { name: '.', keycode: '0x37' },
                { name: '/', keycode: '0x38' },
                { name: 'Shift', keycode: '0xE5' },
            ],
            // Row 5
            [
                { name: 'Ctrl', keycode: '0xE0' },
                { name: 'Alt', keycode: '0xE2' },
                { name: 'Space', keycode: '0x2C' },
                { name: 'Alt', keycode: '0xE6' },
                { name: 'Ctrl', keycode: '0xE4' },
            ]
        ],
        shifted: [
            // Function keys
            [
                { name: 'Esc', keycode: '0x29' },
                { name: 'F1', keycode: '0x3A' },
                { name: 'F2', keycode: '0x3B' },
                { name: 'F3', keycode: '0x3C' },
                { name: 'F4', keycode: '0x3D' },
                { name: 'F5', keycode: '0x3E' },
                { name: 'F6', keycode: '0x3F' },
                { name: 'F7', keycode: '0x40' },
                { name: 'F8', keycode: '0x41' },
                { name: 'F9', keycode: '0x42' },
                { name: 'F10', keycode: '0x43' },
                { name: 'F11', keycode: '0x44' },
                { name: 'F12', keycode: '0x45' },
            ],
            // Row 1
            [
                { name: '~', keycode: '0x35' },
                { name: '!', keycode: '0x1E' },
                { name: '@', keycode: '0x1F' },
                { name: '#', keycode: '0x20' },
                { name: '$', keycode: '0x21' },
                { name: '%', keycode: '0x22' },
                { name: '^', keycode: '0x23' },
                { name: '&', keycode: '0x24' },
                { name: '*', keycode: '0x25' },
                { name: '(', keycode: '0x26' },
                { name: ')', keycode: '0x27' },
                { name: '_', keycode: '0x2D' },
                { name: '+', keycode: '0x2E' },
                { name: 'Backspace', keycode: '0x2A' },
            ],
            // Row 2
            [
                { name: 'Tab', keycode: '0x2B' },
                { name: 'Q', keycode: '0x14' },
                { name: 'W', keycode: '0x1A' },
                { name: 'E', keycode: '0x08' },
                { name: 'R', keycode: '0x15' },
                { name: 'T', keycode: '0x17' },
                { name: 'Y', keycode: '0x1C' },
                { name: 'U', keycode: '0x18' },
                { name: 'I', keycode: '0x0C' },
                { name: 'O', keycode: '0x12' },
                { name: 'P', keycode: '0x13' },
                { name: '{', keycode: '0x2F' },
                { name: '}', keycode: '0x30' },
                { name: '|', keycode: '0x31' },
            ],
            // Row 3
            [
                { name: 'Caps Lock', keycode: '0x39', disabled: true },
                { name: 'A', keycode: '0x04' },
                { name: 'S', keycode: '0x16' },
                { name: 'D', keycode: '0x07' },
                { name: 'F', keycode: '0x09' },
                { name: 'G', keycode: '0x0A' },
                { name: 'H', keycode: '0x0B' },
                { name: 'J', keycode: '0x0D' },
                { name: 'K', keycode: '0x0E' },
                { name: 'L', keycode: '0x0F' },
                { name: ':', keycode: '0x33' },
                { name: "'", keycode: '0x34' },
                { name: 'Enter', keycode: '0x28' },
            ],
            // Row 4
            [
                { name: 'Shift', keycode: '0xE1' },
                { name: 'Z', keycode: '0x1D' },
                { name: 'X', keycode: '0x1B' },
                { name: 'C', keycode: '0x06' },
                { name: 'V', keycode: '0x19' },
                { name: 'B', keycode: '0x05' },
                { name: 'N', keycode: '0x11' },
                { name: 'M', keycode: '0x10' },
                { name: '<', keycode: '0x36' },
                { name: '>', keycode: '0x37' },
                { name: '?', keycode: '0x38' },
                { name: 'Shift', keycode: '0xE5' },
            ],
            // Row 5
            [
                { name: 'Ctrl', keycode: '0xE0' },
                { name: 'Alt', keycode: '0xE2' },
                { name: 'Space', keycode: '0x2C' },
                { name: 'Alt Gr', keycode: '0xE6' },
                { name: 'Ctrl', keycode: '0xE4' },
            ]
        ]
    },
    italian: {
        normal: [
            // Function keys
            [
                { name: 'Esc', keycode: '0x29' },
                { name: 'F1', keycode: '0x3A' },
                { name: 'F2', keycode: '0x3B' },
                { name: 'F3', keycode: '0x3C' },
                { name: 'F4', keycode: '0x3D' },
                { name: 'F5', keycode: '0x3E' },
                { name: 'F6', keycode: '0x3F' },
                { name: 'F7', keycode: '0x40' },
                { name: 'F8', keycode: '0x41' },
                { name: 'F9', keycode: '0x42' },
                { name: 'F10', keycode: '0x43' },
                { name: 'F11', keycode: '0x44' },
                { name: 'F12', keycode: '0x45' },
            ],
            // Row 1
            [
                { name: '\\', keycode: '0x35' },
                { name: '1', keycode: '0x1E' },
                { name: '2', keycode: '0x1F' },
                { name: '3', keycode: '0x20' },
                { name: '4', keycode: '0x21' },
                { name: '5', keycode: '0x22' },
                { name: '6', keycode: '0x23' },
                { name: '7', keycode: '0x24' },
                { name: '8', keycode: '0x25' },
                { name: '9', keycode: '0x26' },
                { name: '0', keycode: '0x27' },
                { name: "'", keycode: '0x2D' },
                { name: 'ì', keycode: '0x2E' },
                { name: 'Backspace', keycode: '0x2A' },
            ],
            // Row 2
            [
                { name: 'Tab', keycode: '0x2B' },
                { name: 'q', keycode: '0x14' },
                { name: 'w', keycode: '0x1A' },
                { name: 'e', keycode: '0x08' },
                { name: 'r', keycode: '0x15' },
                { name: 't', keycode: '0x17' },
                { name: 'y', keycode: '0x1C' },
                { name: 'u', keycode: '0x18' },
                { name: 'i', keycode: '0x0C' },
                { name: 'o', keycode: '0x12' },
                { name: 'p', keycode: '0x13' },
                { name: 'è', keycode: '0x2F' },
                { name: '+', keycode: '0x30' },
                { name: 'Enter', keycode: '0x28' },
            ],
            // Row 3
            [
                { name: 'Caps Lock', keycode: '0x39', disabled: true },
                { name: 'a', keycode: '0x04' },
                { name: 's', keycode: '0x16' },
                { name: 'd', keycode: '0x07' },
                { name: 'f', keycode: '0x09' },
                { name: 'g', keycode: '0x0A' },
                { name: 'h', keycode: '0x0B' },
                { name: 'j', keycode: '0x0D' },
                { name: 'k', keycode: '0x0E' },
                { name: 'l', keycode: '0x0F' },
                { name: 'ò', keycode: '0x33' },
                { name: 'à', keycode: '0x34' },
                { name: 'ù', keycode: '0x31' },
            ],
            // Row 4
            [
                { name: 'Shift', keycode: '0xE1' },
                { name: '<', keycode: '0x64' },
                { name: 'z', keycode: '0x1D' },
                { name: 'x', keycode: '0x1B' },
                { name: 'c', keycode: '0x06' },
                { name: 'v', keycode: '0x19' },
                { name: 'b', keycode: '0x05' },
                { name: 'n', keycode: '0x11' },
                { name: 'm', keycode: '0x10' },
                { name: ',', keycode: '0x36' },
                { name: '.', keycode: '0x37' },
                { name: '-', keycode: '0x38' },
                { name: 'Shift', keycode: '0xE5' },
            ],
            // Row 5
            [
                { name: 'Ctrl', keycode: '0xE0' },
                { name: 'Alt', keycode: '0xE2' },
                { name: 'Space', keycode: '0x2C' },
                { name: 'Alt Gr', keycode: '0xE6' },
                { name: 'Ctrl', keycode: '0xE4' },
            ]
        ],
        shifted: [
            // ... (Italian shifted layout)
        ]
    },
    hebrew: {
        normal: [
            // Function keys
            [
                { name: 'Esc', keycode: '0x29' },
                { name: 'F1', keycode: '0x3A' },
                { name: 'F2', keycode: '0x3B' },
                { name: 'F3', keycode: '0x3C' },
                { name: 'F4', keycode: '0x3D' },
                { name: 'F5', keycode: '0x3E' },
                { name: 'F6', keycode: '0x3F' },
                { name: 'F7', keycode: '0x40' },
                { name: 'F8', keycode: '0x41' },
                { name: 'F9', keycode: '0x42' },
                { name: 'F10', keycode: '0x43' },
                { name: 'F11', keycode: '0x44' },
                { name: 'F12', keycode: '0x45' },
            ],
            // Row 1
            [
                { name: ';', keycode: '0x35' },
                { name: '1', keycode: '0x1E' },
                { name: '2', keycode: '0x1F' },
                { name: '3', keycode: '0x20' },
                { name: '4', keycode: '0x21' },
                { name: '5', keycode: '0x22' },
                { name: '6', keycode: '0x23' },
                { name: '7', keycode: '0x24' },
                { name: '8', keycode: '0x25' },
                { name: '9', keycode: '0x26' },
                { name: '0', keycode: '0x27' },
                { name: '-', keycode: '0x2D' },
                { name: '=', keycode: '0x2E' },
                { name: 'Backspace', keycode: '0x2A' },
            ],
            // Row 2
            [
                { name: 'Tab', keycode: '0x2B' },
                { name: '/', keycode: '0x14' },
                { name: "'", keycode: '0x1A' },
                { name: 'ק', keycode: '0x08' },
                { name: 'ר', keycode: '0x15' },
                { name: 'א', keycode: '0x17' },
                { name: 'ט', keycode: '0x1C' },
                { name: 'ו', keycode: '0x18' },
                { name: 'ן', keycode: '0x0C' },
                { name: 'ם', keycode: '0x12' },
                { name: 'פ', keycode: '0x13' },
                { name: '[', keycode: '0x2F' },
                { name: ']', keycode: '0x30' },
                { name: 'Enter', keycode: '0x28' },
            ],
            // Row 3
            [
                { name: 'Caps Lock', keycode: '0x39', disabled: true },
                { name: 'ש', keycode: '0x04' },
                { name: 'ד', keycode: '0x16' },
                { name: 'ג', keycode: '0x07' },
                { name: 'כ', keycode: '0x09' },
                { name: 'ע', keycode: '0x0A' },
                { name: 'י', keycode: '0x0B' },
                { name: 'ח', keycode: '0x0D' },
                { name: 'ל', keycode: '0x0E' },
                { name: 'ך', keycode: '0x0F' },
                { name: 'ף', keycode: '0x33' },
                { name: ',', keycode: '0x34' },
            ],
            // Row 4
            [
                { name: 'Shift', keycode: '0xE1' },
                { name: 'ז', keycode: '0x1D' },
                { name: 'ס', keycode: '0x1B' },
                { name: 'ב', keycode: '0x06' },
                { name: 'ה', keycode: '0x19' },
                { name: 'נ', keycode: '0x05' },
                { name: 'מ', keycode: '0x11' },
                { name: 'צ', keycode: '0x10' },
                { name: 'ת', keycode: '0x36' },
                { name: 'ץ', keycode: '0x37' },
                { name: '.', keycode: '0x38' },
                { name: 'Shift', keycode: '0xE5' },
            ],
            // Row 5
            [
                { name: 'Ctrl', keycode: '0xE0' },
                { name: 'Alt', keycode: '0xE2' },
                { name: 'Space', keycode: '0x2C' },
                { name: 'Alt Gr', keycode: '0xE6' },
                { name: 'Ctrl', keycode: '0xE4' },
            ]
        ],
        shifted: [
            // ... (Hebrew shifted layout)
        ]
    }
};

// Copy English layouts to other languages to fill them out
keyboardLayouts.italian.shifted = keyboardLayouts.english.shifted;
keyboardLayouts.hebrew.shifted = keyboardLayouts.english.shifted; // Placeholder

const keyboardContainer = document.getElementById('keyboard-container');
const keycodeDisplay = document.getElementById('keycode-display');
const languageSelector = document.getElementById('language-selector');

function generateKeyboard() {
    keyboardContainer.innerHTML = ''; // Clear existing keyboard
    const layout = shiftActive ? keyboardLayouts[currentLanguage].shifted : keyboardLayouts[currentLanguage].normal;

    if (currentLanguage === 'hebrew') {
        keyboardContainer.classList.add('hebrew');
    } else {
        keyboardContainer.classList.remove('hebrew');
    }

    layout.forEach(row => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('keyboard-row');
        row.forEach(key => {
            const keyElement = document.createElement('div');
            keyElement.classList.add('key');

            if (key.disabled) {
                keyElement.classList.add('key-disabled');
            }
            if (key.name === 'Shift' && shiftActive) {
                keyElement.classList.add('key-active');
            }

            // Add classes for special keys to be targeted by CSS flex-grow
            if (key.name === 'Backspace' || key.name === 'Caps Lock' || key.name === 'Enter' || key.name === 'Shift') {
                keyElement.classList.add('key-large');
            } else if (key.name === 'Tab' || key.name === 'Ctrl' || key.name === 'Alt' || key.name === 'Alt Gr') {
                keyElement.classList.add('key-medium');
            } else if (key.name === 'Space') {
                keyElement.classList.add('key-space');
            }

            keyElement.textContent = key.name;
            keyElement.dataset.keycode = key.keycode;
            rowElement.appendChild(keyElement);
        });
        keyboardContainer.appendChild(rowElement);
    });
}

keyboardContainer.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('key') && !target.classList.contains('key-disabled')) {
        if (target.textContent === 'Shift') {
            shiftActive = !shiftActive;
            generateKeyboard();
        } else {
            const keycode = target.dataset.keycode;
            keycodeDisplay.textContent = keycode;
            if (shiftActive) {
                shiftActive = false;
                generateKeyboard();
            }
        }
    }
});

languageSelector.addEventListener('change', function(event) {
    currentLanguage = event.target.value;
    shiftActive = false;
    generateKeyboard();
});

// Initialize with English layout
keyboardLayouts.english.normal = JSON.parse(JSON.stringify(keyboardLayouts.hebrew.normal)); // Deep copy
keyboardLayouts.english.shifted = JSON.parse(JSON.stringify(keyboardLayouts.hebrew.shifted)); // Deep copy

// Correct English layout
keyboardLayouts.english.normal[1] = [
    { name: '`', keycode: '0x35' }, { name: '1', keycode: '0x1E' }, { name: '2', keycode: '0x1F' }, { name: '3', keycode: '0x20' }, { name: '4', keycode: '0x21' }, { name: '5', keycode: '0x22' }, { name: '6', keycode: '0x23' }, { name: '7', keycode: '0x24' }, { name: '8', keycode: '0x25' }, { name: '9', keycode: '0x26' }, { name: '0', keycode: '0x27' }, { name: '-', keycode: '0x2D' }, { name: '=', keycode: '0x2E' }, { name: 'Backspace', keycode: '0x2A' },
];
keyboardLayouts.english.normal[2] = [
    { name: 'Tab', keycode: '0x2B' }, { name: 'q', keycode: '0x14' }, { name: 'w', keycode: '0x1A' }, { name: 'e', keycode: '0x08' }, { name: 'r', keycode: '0x15' }, { name: 't', keycode: '0x17' }, { name: 'y', keycode: '0x1C' }, { name: 'u', keycode: '0x18' }, { name: 'i', keycode: '0x0C' }, { name: 'o', keycode: '0x12' }, { name: 'p', keycode: '0x13' }, { name: '[', keycode: '0x2F' }, { name: ']', keycode: '0x30' }, { name: '\\', keycode: '0x31' },
];
keyboardLayouts.english.normal[3] = [
    { name: 'Caps Lock', keycode: '0x39', disabled: true }, { name: 'a', keycode: '0x04' }, { name: 's', keycode: '0x16' }, { name: 'd', keycode: '0x07' }, { name: 'f', keycode: '0x09' }, { name: 'g', keycode: '0x0A' }, { name: 'h', keycode: '0x0B' }, { name: 'j', keycode: '0x0D' }, { name: 'k', keycode: '0x0E' }, { name: 'l', keycode: '0x0F' }, { name: ';', keycode: '0x33' }, { name: "'", keycode: '0x34' }, { name: 'Enter', keycode: '0x28' },
];
keyboardLayouts.english.normal[4] = [
    { name: 'Shift', keycode: '0xE1' }, { name: 'z', keycode: '0x1D' }, { name: 'x', keycode: '0x1B' }, { name: 'c', keycode: '0x06' }, { name: 'v', keycode: '0x19' }, { name: 'b', keycode: '0x05' }, { name: 'n', keycode: '0x11' }, { name: 'm', keycode: '0x10' }, { name: ',', keycode: '0x36' }, { name: '.', keycode: '0x37' }, { name: '/', keycode: '0x38' }, { name: 'Shift', keycode: '0xE5' },
];

generateKeyboard();
