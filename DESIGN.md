# Detailed Design Document

## 1. Introduction

This document provides a detailed design for the Virtual usb hid Keyboard project.

It breaks down the system architecture, component design, data structures, and the logic for implementing the virtual keyboard and HID keycode display.

## 2. System Architecture

The application will follow a simple client-side architecture using three core files:

*   `index.html`: The main entry point and structure of the web page.
*   `css/style.css`: Handles all styling and visual presentation of the keyboard.
*   `js/script.js`: Contains all the application logic, including keyboard generation, user interaction, and keycode mapping.

This separation of concerns ensures modularity and makes the project easier to maintain and port.

## 3. Component Design

### 3.1. HTML (`index.html`)

The HTML file will be minimal. It will define the basic page structure and include two main `div` containers:

*   `<div id="keycode-display"></div>`: This container will be used to display the 2-byte USB HID keycode of the last clicked key.
*   `<div id="keyboard-container"></div>`: This container will be dynamically populated with the virtual keyboard keys by the JavaScript code.

The HTML will link to the `style.css` for styling and the `script.js` for functionality.

### 3.2. CSS (`css/style.css`)

The CSS file will define the visual appearance of the keyboard.

*   **Keyboard Container:** Styles for the main keyboard container, using Flexbox or Grid to arrange the rows of keys.
*   **Key Styling:** 
    *   Default state: Standard appearance of a key.
    *   Hover state: Visual feedback when the mouse pointer is over a key.
    *   Active state: Visual feedback when a key is being clicked.
*   **Key Classes:** Different classes will be used for keys of different sizes (e.g., `.key-large` for Enter/Shift, `.key-space` for the spacebar).
*   **Keycode Display:** Styling for the text that displays the HID keycode.

### 3.3. JavaScript (`js/script.js`)

This file will contain the core logic of the application.

*   **Keyboard Data Structure:** A JavaScript object or array will be used to define the entire keyboard layout. Each key will be an object with properties like:
    *   `name`: The text to be displayed on the key (e.g., "A", "Shift").
    *   `keycode`: The corresponding USB HID keycode (e.g., `0x04`).
    *   `class`: A CSS class for specific styling (e.g., `key-large`).

*   **Keyboard Generation Function:** A function that dynamically creates the keyboard HTML based on the data structure. This function will iterate through the data, create a `div` element for each key, set its properties (text, data attributes for the keycode), and append it to the `#keyboard-container`.

*   **Event Handling:** A single event listener will be attached to the `#keyboard-container` to handle all key clicks (event delegation). This is more efficient than adding a listener to every single key.

*   **Key Click Logic:** When a key is clicked, the event handler will:
    1.  Identify the clicked key element.
    2.  Retrieve the `keycode` from a `data-keycode` attribute stored on the element.
    3.  Update the `innerHTML` of the `#keycode-display` container with the retrieved keycode.

## 4. Data Structures

The keyboard layout and keycode mapping will be stored in a JavaScript array of objects. This makes the keyboard configuration easy to manage and modify. 

Example structure:

```javascript
const keyboardLayout = [
    // Row 1
    [
        { name: '`', keycode: '0x35' },
        { name: '1', keycode: '0x1E' },
        // ... and so on
    ],
    // Row 2
    [
        { name: 'Tab', keycode: '0x2B', class: 'key-medium' },
        { name: 'Q', keycode: '0x14' },
        // ... and so on
    ]
];
```

## 5. Program Flow

1.  **Page Load:** The browser loads `index.html`.
2.  **Initialization:** The `script.js` file is executed.
3.  **Keyboard Generation:** The script calls the keyboard generation function.
4.  **DOM Manipulation:** The function iterates through the `keyboardLayout` data structure, creates `div` elements for each key, and appends them to the `#keyboard-container`.
5.  **Event Listener:** An event listener is attached to the `#keyboard-container`.
6.  **User Interaction:** The user clicks on a virtual key.
7.  **Event Capture:** The event listener on the container captures the click event.
8.  **Key Identification:** The handler identifies which key was clicked and reads its `data-keycode` attribute.
9.  **Display Update:** The handler updates the content of the `#keycode-display` div with the keycode.

## 6. Portability

The modular design (separating HTML, CSS, and JS) and the use of a data structure for the keyboard layout will make the project easy to port. The keyboard component can be easily integrated into other projects by including the CSS and JS files and providing a container element in the HTML.