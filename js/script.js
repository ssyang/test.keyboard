const keyboardLayout = [
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
        { name: 'Backspace', keycode: '0x2A', class: 'key-large' },
    ],
    // Row 2
    [
        { name: 'Tab', keycode: '0x2B', class: 'key-medium' },
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
        { name: '[', keycode: '0x2F' },
        { name: ']', keycode: '0x30' },
        { name: '\\', keycode: '0x31', class: 'key-medium' },
    ],
    // Row 3
    [
        { name: 'Caps Lock', keycode: '0x39', class: 'key-large' },
        { name: 'A', keycode: '0x04' },
        { name: 'S', keycode: '0x16' },
        { name: 'D', keycode: '0x07' },
        { name: 'F', keycode: '0x09' },
        { name: 'G', keycode: '0x0A' },
        { name: 'H', keycode: '0x0B' },
        { name: 'J', keycode: '0x0D' },
        { name: 'K', keycode: '0x0E' },
        { name: 'L', keycode: '0x0F' },
        { name: ';', keycode: '0x33' },
        { name: "'", keycode: '0x34' },
        { name: 'Enter', keycode: '0x28', class: 'key-large' },
    ],
    // Row 4
    [
        { name: 'Shift', keycode: '0xE1', class: 'key-large' },
        { name: 'Z', keycode: '0x1D' },
        { name: 'X', keycode: '0x1B' },
        { name: 'C', keycode: '0x06' },
        { name: 'V', keycode: '0x19' },
        { name: 'B', keycode: '0x05' },
        { name: 'N', keycode: '0x11' },
        { name: 'M', keycode: '0x10' },
        { name: ',', keycode: '0x36' },
        { name: '.', keycode: '0x37' },
        { name: '/', keycode: '0x38' },
        { name: 'Shift', keycode: '0xE5', class: 'key-large' },
    ],
    // Row 5
    [
        { name: 'Ctrl', keycode: '0xE0', class: 'key-medium' },
        { name: 'Win', keycode: '0xE3' },
        { name: 'Alt', keycode: '0xE2' },
        { name: 'Space', keycode: '0x2C', class: 'key-space' },
        { name: 'Alt', keycode: '0xE6' },
        { name: 'Ctrl', keycode: '0xE4', class: 'key-medium' },
    ]
];

const keyboardContainer = document.getElementById('keyboard-container');
const keycodeDisplay = document.getElementById('keycode-display');

function generateKeyboard() {
    keyboardLayout.forEach(row => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('keyboard-row');
        row.forEach(key => {
            const keyElement = document.createElement('div');
            keyElement.classList.add('key');
            if (key.class) {
                keyElement.classList.add(key.class);
            }
            keyElement.textContent = key.name;
            keyElement.dataset.keycode = key.keycode;
            rowElement.appendChild(keyElement);
        });
        keyboardContainer.appendChild(rowElement);
    });
}

keyboardContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('key')) {
        const keycode = event.target.dataset.keycode;
        keycodeDisplay.textContent = keycode;
    }
});

generateKeyboard();
