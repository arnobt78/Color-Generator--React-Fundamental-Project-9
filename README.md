# Color Generator - React, Vite, JavaScript, Values.js, React-Toastify, Clipboard API, Fundamental Project 9

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-4.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.2-blue?logo=react&logoColor=white)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A hands-on React app that generates color palettes from any hex color. Enter a hex code or use the built-in color picker to get a full set of tints and shades, then copy any hex value to the clipboard with one click. Built with React, Vite, values.js, and react-toastify—ideal for learning component state, third-party libraries, and the Clipboard API.

- **Live Demo:** [https://create-color.vercel.app/](https://create-color.vercel.app/)

<img width="1911" height="945" alt="Screenshot 2026-03-11 at 15 09 29" src="https://github.com/user-attachments/assets/13966ee6-e633-4be6-bab0-66292eaeba08" />

## Table of Contents

1. [Project Summary](#project-summary)
2. [Live Demo](#live-demo)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Project Structure](#project-structure)
6. [Setup & Installation](#setup--installation)
7. [Environment Variables (.env)](#environment-variables-env)
8. [How to Run & Use](#how-to-run--use)
9. [Usage Instructions](#usage-instructions)
10. [Component Walkthrough](#component-walkthrough)
11. [Key Functionality & APIs](#key-functionality--apis)
12. [Routes & Architecture](#routes--architecture)
13. [Styling and Responsive Design](#styling-and-responsive-design)
14. [Code Examples & Teaching Content](#code-examples--teaching-content)
15. [Reusing Components in Other Projects](#reusing-components-in-other-projects)
16. [Learning Outcomes](#learning-outcomes)
17. [Keywords](#keywords)
18. [Conclusion](#conclusion)
19. [License](#license)

---

## Project Summary

This project is a **client-side only** color palette generator. There is no backend server or database: all logic runs in the browser. You pick or type a hex color, and the app uses the **values.js** library to compute tints (lighter) and shades (darker) in 10% steps. Each swatch is clickable to copy its hex code via the **Clipboard API**, with **react-toastify** used for success and error messages. The UI is built with React functional components and hooks, styled with CSS (including CSS Grid), and bundled with Vite.

---

## Live Demo

**Production URL:** [https://create-color.vercel.app/](https://create-color.vercel.app/)

You can use the live demo without installing anything—enter a hex (e.g. `#f15025`) or use the color picker, then click any generated color to copy its hex value.

---

## Features

- **Hex input & color picker** — Enter a color as hex (e.g. `#f15025`) or use the native color picker.
- **Instant palette generation** — Generate a full set of tints and shades (10% steps) from one base color.
- **Copy to clipboard** — Click any color swatch to copy its hex code; toast confirms success or error.
- **Responsive grid** — Color grid uses CSS Grid and adapts to different screen sizes.
- **Toast notifications** — Success and error feedback via react-toastify (e.g. invalid hex, copy success/failure).
- **Component-based structure** — Clear separation: `App` (state), `Form` (input), `ColorList` / `SingleColor` (display and copy).

---

## Technologies Used

| Technology            | Purpose                                      |
| --------------------- | -------------------------------------------- |
| **React 18**          | UI components, state (useState), composition |
| **Vite 4**            | Build tool, dev server, HMR                  |
| **JavaScript (ES6+)** | No TypeScript; modern JS and JSX             |
| **values.js**         | Generate tints/shades from a hex color       |
| **react-toastify**    | Toast notifications (success/error)          |
| **nanoid**            | Unique keys for list items                   |
| **Clipboard API**     | Browser API to copy hex to clipboard         |
| **CSS Grid**          | Responsive layout for color swatches         |

---

## Project Structure

```bash
09-color-generator/
├── public/
│   └── vite.svg              # Favicon / app icon
├── src/
│   ├── components/
│   │   ├── Form.jsx           # Color input form (hex + color picker)
│   │   ├── ColorList.jsx      # Grid container for color swatches
│   │   └── SingleColor.jsx    # One swatch + copy-on-click
│   ├── App.jsx                # Root: state, addColor, Form + ColorList
│   ├── main.jsx               # React root mount + global CSS imports
│   └── index.css              # Global + project-specific styles
├── index.html                 # Entry HTML, meta, script to main.jsx
├── vite.config.js             # Vite + React plugin config
├── package.json
├── eslint.config.js           # ESLint 9 flat config (React, hooks)
└── README.md
```

**Entry point:** `index.html` loads `/src/main.jsx` → `main.jsx` renders `<App />` into `#root`. There are no route definitions (single-page app, single view).

---

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/arnobt78/Color-Generator--React-Fundamental-Project-9.git
   cd Color-Generator--React-Fundamental-Project-9
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be at `http://localhost:5173` (or the port Vite prints in the terminal).

4. **Build for production**

   ```bash
   npm run build
   ```

   Output goes to `dist/`. Preview the production build with:

   ```bash
   npm run preview
   ```

5. **Lint**

   ```bash
   npm run lint
   ```

   Runs ESLint on `src/` with zero warnings allowed.

---

## Environment Variables (.env)

This project **does not use any environment variables** out of the box. All behavior is driven by user input and client-side libraries (values.js, react-toastify). There are no API keys, feature flags, or backend URLs to configure.

If you extend the project (e.g. analytics, optional API, or feature flags), you can use Vite’s env support:

- **Creating env files:** In the project root, add `.env`, `.env.local`, `.env.development`, or `.env.production`.
- **Naming:** Only variables prefixed with `VITE_` are exposed to the client. Example: `VITE_APP_TITLE=Color Generator`.
- **Usage in code:** Read them via `import.meta.env.VITE_APP_TITLE`. Do not put secrets in `VITE_*`—they are embedded in the client bundle.
- **Example:**  
  Create `.env.local` with:
  ```env
  VITE_APP_TITLE=Color Generator
  ```
  Then in JS: `const title = import.meta.env.VITE_APP_TITLE;`

No `.env` file is required to run or build the project as-is.

---

## How to Run & Use

- **Development:** `npm run dev` → open the URL shown (e.g. `http://localhost:5173`).
- **Production build:** `npm run build` → `npm run preview` to test the `dist/` build locally.
- **Usage flow:** Type or pick a color → click **submit** → click any swatch to copy its hex. Invalid hex shows an error toast.

---

## Usage Instructions

1. Enter a color in hex format (e.g. `#f15025`) in the text input, or use the color picker.
2. Click **submit** to generate a palette of tints and shades (10% steps).
3. Click any color in the grid to copy its hex code to the clipboard; a toast confirms success.
4. If the input is invalid, a toast shows the error message from values.js.
5. Use the copied hex codes in your design tools, CSS, or other apps.

---

## Component Walkthrough

### App Component (`src/App.jsx`)

- **Role:** Root component. Holds the list of generated colors and the handler that generates a new palette from a hex string.
- **State:** `colors` — array of color objects from values.js (each has `hex`, `weight`, etc.).
- **Handler:** `addColor(color)` — calls `new Values(color).all(10)`, updates `colors`, or shows a toast on error.
- **Renders:** `<Form addColor={addColor} />`, `<ColorList colors={colors} />`, and `<ToastContainer position='top-center' />`.

---

### Form Component (`src/components/Form.jsx`)

- **Role:** Collects the user’s color input (text + color picker) and submits it to the parent.
- **State:** `color` — current hex string (or empty).
- **Behavior:** Both the color picker and the text input update `color`; form submit calls `addColor(color)`.
- **Renders:** A section with heading “color generator”, a form with color input, text input (placeholder `#f15025`), and a submit button styled with the current color.

---

### ColorList Component (`src/components/ColorList.jsx`)

- **Role:** Renders the list of generated colors as a grid.
- **Props:** `colors` — array of color objects from values.js.
- **Behavior:** Maps over `colors` and renders a `SingleColor` for each, using `nanoid()` for the React `key`.
- **Renders:** A `<section className='colors'>` containing multiple `SingleColor` components.

---

### SingleColor Component (`src/components/SingleColor.jsx`)

- **Role:** One color swatch: shows weight (%) and hex, and copies hex to clipboard on click.
- **Props:** `index` (number), `color` (object with `hex`, `weight`).
- **Behavior:** Click handler checks `navigator.clipboard`, then `navigator.clipboard.writeText(\`#${hex}\`)`, and shows success or error toast.
- **Renders:** An `<article>` with background `#${hex}`, weight and hex text; uses class `color-light` when `index > 10` for readable text on light tints.

---

## Key Functionality & APIs

### Color generation (values.js)

- **Library:** [values.js](https://github.com/noeldelgado/values.js) — creates tints and shades from a single hex.
- **Usage:**

  ```js
  import Values from "values.js";

  const colors = new Values("#f15025").all(10); // 10% steps
  // colors is an array of objects: { hex, weight, type, ... }
  ```

- **Error handling:** Invalid hex (e.g. `"red"` or `"#ggg"`) throws; the app catches and shows `error.message` via toast.

---

### Notifications (react-toastify)

- **Setup in App.jsx:**

  ```js
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

  // In JSX:
  <ToastContainer position="top-center" />;
  ```

- **Usage:**

  ```js
  toast.success("Color copied to clipboard");
  toast.error("Invalid color value");
  toast.error(error.message); // from catch block
  ```

---

### Copy to clipboard (Clipboard API)

- **API:** `navigator.clipboard.writeText(text)` (async, returns a Promise).
- **Usage in SingleColor.jsx:**

  ```js
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success("Color copied to clipboard");
    } catch {
      toast.error("Failed to copy color to clipboard");
    }
  } else {
    toast.error("Clipboard access not available");
  }
  ```

- **Note:** Clipboard API requires a secure context (HTTPS or localhost).

---

## Routes & Architecture

- **Routes:** None. This is a single-page app with one screen: form at the top, color grid below.
- **Data flow:** One-way. User input → `Form` → `addColor` in `App` → `colors` state → `ColorList` → `SingleColor`. No router, no backend, no API endpoints.
- **Backend:** There is no backend; everything runs in the browser.

---

## Styling and Responsive Design

- **Global styles:** `src/index.css` — resets, CSS variables (e.g. `--primary-500`, `--grey-*`, `--borderRadius`), typography, buttons, form and alert classes.
- **Project-specific:** `.container` (form layout), `.color-form`, `.colors` (grid), `.color` / `.color-light` (swatch and text contrast).
- **Grid layout:**

  ```css
  .colors {
    min-height: calc(100vh - 160px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
  }
  ```

- **Responsive:** At `min-width: 768px`, the form switches to a horizontal layout (color picker + text input + button in one row). The color grid always uses `auto-fit` and min widths so it adapts to screen size.

---

## Code Examples & Teaching Content

### Generate palette on submit (App.jsx)

```js
import Values from "values.js";
import { useState } from "react";
import { toast } from "react-toastify";

const [colors, setColors] = useState(new Values("#f15025").all(10));

const addColor = (color) => {
  try {
    const newColors = new Values(color).all(10);
    setColors(newColors);
  } catch (error) {
    toast.error(error.message);
  }
};
```

---

### Form with controlled input (Form.jsx)

```js
const [color, setColor] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  addColor(color);
};

// In JSX: value={color}, onChange={(e) => setColor(e.target.value)} on both inputs
```

---

### Copy hex on click (SingleColor.jsx)

```js
const saveToClipboard = async () => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success("Color copied to clipboard");
    } catch {
      toast.error("Failed to copy color to clipboard");
    }
  } else {
    toast.error("Clipboard access not available");
  }
};

// On the article: onClick={saveToClipboard}
```

---

### List with stable keys (ColorList.jsx)

```js
import { nanoid } from "nanoid";

{
  colors.map((color, index) => (
    <SingleColor key={nanoid()} color={color} index={index} />
  ));
  olors.map((color, index) => (
    <SingleColor key={nanoid()} color={color} index={index} />
  ));
}
```

Using `nanoid()` gives a unique key per item. For a static list that never reorders, `index` could be used as key instead.

---

## Reusing Components in Other Projects

- **Form.jsx:** Copy the file; it only needs `addColor(color)` from the parent. You can rename the heading or placeholder and restyle with your own CSS.
- **ColorList.jsx:** Pass any array of objects that have at least the shape `{ hex, weight }` (or adapt SingleColor to your shape). Replace `nanoid` with another key strategy if needed.
- **SingleColor.jsx:** Reusable wherever you have a `{ hex, weight }` (or similar) object. Ensure the parent app has `ToastContainer` and `react-toastify` CSS if you use toasts.
- **Pattern:** State lives in a parent; Form and ColorList are presentational plus minimal behavior (submit, click-to-copy). You can wrap this in a route or embed the grid in a larger design tool UI.

---

## Learning Outcomes

- Use React functional components and `useState` for local and lifted state.
- Compose components and pass props/callbacks (Form → App → ColorList → SingleColor).
- Integrate third-party libraries (values.js, react-toastify) in a Vite + React app.
- Use the Clipboard API for copy-to-clipboard and handle success/error with toasts.
- Structure a small app with clear separation: one smart component (App) and presentational components (Form, ColorList, SingleColor).
- Apply responsive CSS Grid and CSS variables for layout and theming.

---

## Keywords

React, Color Generator, Hex Color, Tints and Shades, Color Palette, values.js, react-toastify, Color Picker, Copy to Clipboard, Clipboard API, CSS Grid, Functional Components, useState, JavaScript ES6+, Vite, Web Development, Frontend, UI, Hooks, Toast Notifications, Responsive Design.

---

## Conclusion

This project is a focused introduction to React fundamentals: state, props, event handlers, and integration with external libraries and browser APIs. It has no backend or environment variables, so you can run it immediately after `npm install` and `npm run dev`. You can extend it with features like saving palettes, exporting to JSON/CSS, or switching to a different step size for tints and shades. The component structure and patterns (controlled inputs, lifted state, copy-to-clipboard) are reusable in other React apps.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** — feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
