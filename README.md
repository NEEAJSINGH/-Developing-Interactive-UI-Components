# Interactive Accessible FAQ Accordion

## 1. Project Overview

This project is an interactive FAQ Accordion built using only:

- HTML5
- CSS3
- Vanilla JavaScript

The component demonstrates DOM manipulation, event handling, accessibility,
responsive design, keyboard navigation, animation states, error handling,
and graceful fallback behavior.

## 2. Why an Accordion?

An accordion is useful when a page contains multiple questions or sections
that do not need to be visible at the same time. It reduces visual clutter
while allowing users to access information quickly.

## 3. Features

- Expand and collapse FAQ answers.
- Vanilla JavaScript only.
- Semantic HTML structure.
- ARIA `aria-expanded` and `aria-controls`.
- Accessible region labeling.
- Keyboard navigation:
  - Enter / Space: browser button behavior opens or closes the item.
  - Arrow Down: move to the next question.
  - Arrow Up: move to the previous question.
  - Home: move to the first question.
  - End: move to the last question.
- Visible keyboard focus.
- Responsive design for desktop, tablet, and mobile.
- Reduced-motion support using `prefers-reduced-motion`.
- Error handling if the accordion container or panel is missing.
- Graceful fallback message when JavaScript is disabled.
- No external libraries or frameworks.

## 4. File Structure

```text
interactive-accessible-accordion/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 5. How to Run

No installation or build process is required.

### Method 1: Direct browser test

1. Extract the ZIP file.
2. Open `index.html` in Chrome, Edge, Firefox, or another modern browser.
3. Click any question to expand or collapse its answer.

### Method 2: VS Code

1. Open the project folder in VS Code.
2. Open `index.html`.
3. Use Live Server if installed.
4. Open the generated local URL in your browser.

## 6. How to Test

### Mouse / Touch

- Click a question.
- Confirm that its answer opens.
- Click the question again.
- Confirm that its answer closes.

### Keyboard

1. Press `Tab` until an FAQ button receives focus.
2. Press `Enter` or `Space` to open/close it.
3. Press `Arrow Down` to move to the next question.
4. Press `Arrow Up` to move to the previous question.
5. Press `Home` to move to the first question.
6. Press `End` to move to the last question.

### Responsive Testing

Test the page at:

- Desktop width
- Tablet width
- Mobile width

The content should remain readable and the controls should remain usable.

### Reduced Motion

If your operating system has reduced motion enabled, the component avoids
unnecessary animation transitions.

### JavaScript Fallback

Disable JavaScript in the browser and reload the page. The page displays a
message explaining that JavaScript is required for the interactive behavior.

## 7. Accessibility

The component uses:

- Semantic `<main>`, `<section>`, `<article>`, `<h1>`, and `<button>` elements.
- Native buttons instead of clickable generic `<div>` elements.
- `aria-expanded` to communicate the current state.
- `aria-controls` to identify the controlled panel.
- `aria-labelledby` for answer regions.
- Keyboard navigation.
- Visible focus styling.
- Sufficient text contrast.
- Reduced-motion support.

## 8. Error Handling

The JavaScript checks whether:

- The accordion container exists.
- FAQ buttons exist.
- A button has a valid `aria-controls` value.
- The referenced answer panel exists.

If an expected element is missing, the component logs a warning instead of
causing the entire page script to fail.

## 9. Maintainability

The JavaScript is organized into small functions:

- `getPanel()`
- `closeItem()`
- `openItem()`
- `toggleItem()`
- `moveFocus()`
- `initAccordion()`

This makes the component easier to modify or reuse on another page.

## 10. Customization

To add another FAQ item, copy an existing `<article class="faq-item">`
structure and make sure:

1. The button has a unique `id`.
2. `aria-controls` matches the panel's `id`.
3. The panel's `aria-labelledby` matches the button's `id`.

Example:

```html
<button
  type="button"
  aria-expanded="false"
  aria-controls="faq-panel-6"
  id="faq-button-6">
  New Question
</button>

<div
  id="faq-panel-6"
  role="region"
  aria-labelledby="faq-button-6"
  hidden>
  <p>New answer.</p>
</div>
```

## 11. Technologies Used

- HTML5
- CSS3
- JavaScript (ES5-compatible style with progressive enhancement)

## 12. Assignment Requirements Covered

| Requirement | Implemented |
|---|---|
| Interactive UI component | Yes |
| HTML, CSS and vanilla JS | Yes |
| DOM manipulation | Yes |
| Event handling | Yes |
| Responsive design | Yes |
| Accessibility / ARIA | Yes |
| Keyboard navigation | Yes |
| Error handling | Yes |
| Browser fallback | Yes |
| Maintainable / modular code | Yes |
| Comments and documentation | Yes |
| README instructions | Yes |
| Single ZIP submission | Yes |
