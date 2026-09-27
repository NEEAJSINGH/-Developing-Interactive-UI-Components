(function () {
  "use strict";

  /*
   * Accessible FAQ Accordion
   * ------------------------
   * Responsibilities:
   * 1. Find accordion buttons.
   * 2. Toggle the matching answer panel.
   * 3. Keep ARIA state synchronized.
   * 4. Provide keyboard navigation.
   * 5. Fail gracefully if the expected markup is missing.
   */

  function initAccordion() {
    var accordion = document.getElementById("faqAccordion");

    if (!accordion) {
      console.warn("FAQ accordion container was not found.");
      return;
    }

    var buttons = accordion.querySelectorAll(".faq-button");

    if (!buttons.length) {
      console.warn("No FAQ buttons were found.");
      return;
    }

    /*
     * Converts a NodeList into a normal array.
     * Array.from may not exist in very old browsers, so a fallback is used.
     */
    var buttonList = typeof Array.from === "function"
      ? Array.from(buttons)
      : Array.prototype.slice.call(buttons);

    function getPanel(button) {
      var panelId = button.getAttribute("aria-controls");

      if (!panelId) {
        return null;
      }

      return document.getElementById(panelId);
    }

    function closeItem(button) {
      var panel = getPanel(button);

      if (!panel) {
        console.warn("Panel not found for:", button.id);
        return;
      }

      button.setAttribute("aria-expanded", "false");
      panel.hidden = true;
      button.classList.remove("is-open");
    }

    function openItem(button) {
      var panel = getPanel(button);

      if (!panel) {
        console.warn("Panel not found for:", button.id);
        return;
      }

      button.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      button.classList.add("is-open");
    }

    function toggleItem(button) {
      var expanded = button.getAttribute("aria-expanded") === "true";

      if (expanded) {
        closeItem(button);
      } else {
        openItem(button);
      }
    }

    function moveFocus(currentIndex, direction) {
      var nextIndex = currentIndex + direction;

      if (nextIndex < 0) {
        nextIndex = buttonList.length - 1;
      }

      if (nextIndex >= buttonList.length) {
        nextIndex = 0;
      }

      buttonList[nextIndex].focus();
    }

    buttonList.forEach(function (button, index) {
      button.addEventListener("click", function () {
        toggleItem(button);
      });

      button.addEventListener("keydown", function (event) {
        switch (event.key) {
          case "ArrowDown":
            event.preventDefault();
            moveFocus(index, 1);
            break;

          case "ArrowUp":
            event.preventDefault();
            moveFocus(index, -1);
            break;

          case "Home":
            event.preventDefault();
            buttonList[0].focus();
            break;

          case "End":
            event.preventDefault();
            buttonList[buttonList.length - 1].focus();
            break;

          default:
            break;
        }
      });
    });

    /*
     * Make the initial state predictable.
     * If markup contains invalid expanded states, reset them safely.
     */
    buttonList.forEach(function (button) {
      var panel = getPanel(button);

      if (!panel) {
        return;
      }

      if (button.getAttribute("aria-expanded") === "true") {
        openItem(button);
      } else {
        closeItem(button);
      }
    });
  }

  /*
   * DOMContentLoaded keeps the component safe if the script is moved
   * into the <head> in the future.
   */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAccordion);
  } else {
    initAccordion();
  }
})();
