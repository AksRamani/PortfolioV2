 console.log("js called")
function createSticker(obj) {
    const btns = document.querySelectorAll(".sticky_w");
    const texts = document.querySelectorAll(".sticky_t");
  
    btns.forEach((btn, i) => {
      const text = texts[i];
      const innert = btn.getAttribute("data-sticky");
    //   const selfInnert = innert * 3;
  
      btn.offsetX = 0;
      btn.offsetY = 0;
      btn.translateX = 0;
      btn.translateY = 0;
  
      text.style.pointerEvents = "none";
  
      const btnSize = {
        width:
          parseInt(getComputedStyle(btn).width) +
          parseInt(getComputedStyle(btn).paddingRight) * 2,
        height:
          parseInt(getComputedStyle(btn).height) +
          parseInt(getComputedStyle(btn).paddingTop) * 2,
      };
  
      // Mouse move event handler
      function handleMouseMove(e) {
        const offsetX = e.offsetX;
        const offsetY = e.offsetY;
  
        const translateX = (-btnSize.width / 2) + offsetX;
        const translateY = (-btnSize.height / 2) + offsetY;
  
        text.style.transform = `translate(${translateX / innert}px, ${translateY / innert}px)`;
        text.style.transition = `transform ${obj.inertion}s ease-out`;
      }
  
      // Mouse enter event handler
      function handleMouseEnter(e) {
        const offsetX = e.offsetX;
        const offsetY = e.offsetY;
  
        text.style.transform = `translate(${(-btnSize.width / 2 + offsetX) / innert}px, ${(-btnSize.height / 2 + offsetY) / innert}px)`;
        text.style.transition = "transform 0.1s ease-out";
      }
  
      // Mouse leave event handler
      function handleMouseLeave() {
        text.style.transform = "translate(0, 0)";
        text.style.transition = `transform ${obj.spring}s ease-out`;
      }
  
      // Attach event listeners
      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseleave", handleMouseLeave);
    });
  }
  
  // Initialize the stickers with the configuration
  createSticker({
    inertion: 0.4, // Change this for cool effects :) //  0.3 - 1
    spring: 0.5    // And change this                   //  0.3 - 1
  });
  

  window.onload = function() {
    createSticker({
      inertion: 0.4,
      spring: 0.5
    });
  };

  document.addEventListener("DOMContentLoaded", function() {
  createSticker({
    inertion: 0.4,
    spring: 0.5
  });
});


// Initialize the functionality
function initializePageInteractions() {
    setupHoverAnimations();
    setupCustomCursor();
    setupRollingTextAnimation();
}

// Hover effect logic
function setupHoverAnimations() {
    const links = document.querySelectorAll('.hover-this');

    links.forEach(link => {
        link.addEventListener('mousemove', handleMouseMove);
        link.addEventListener('mouseleave', handleMouseLeave);
    });
}

// Handle hover mouse movement
function handleMouseMove(e) {
    const hoverAnim = this.querySelector('.hover-anim');
    const { offsetX: x, offsetY: y } = e;
    const { offsetWidth: width, offsetHeight: height } = this;
    const move = 25;
    const xMove = (x / width) * (move * 2) - move;
    const yMove = (y / height) * (move * 2) - move;

    hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
}

// Handle mouse leave to reset animation
function handleMouseLeave() {
    const hoverAnim = this.querySelector('.hover-anim');
    hoverAnim.style.transform = '';
}

// Cursor movement logic without jQuery
function setupCustomCursor() {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    window.addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    });

    // Vanilla JS hover effect
    const hoverElements = document.querySelectorAll('a, .cursor-pointer');
    hoverElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-active');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-active');
        });
    });
}

// Rolling text animation logic
function setupRollingTextAnimation() {
    const elements = document.querySelectorAll(".rolling-text");

    elements.forEach(element => {
        const innerText = element.innerText;
        element.innerHTML = "";

        const textContainer = createTextContainer(innerText);
        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));

        element.addEventListener("mouseover", () => {
            element.classList.remove("play");
        });
    });
}

// Create the text container with span elements for rolling text
function createTextContainer(text) {
    const container = document.createElement("div");
    container.classList.add("block");

    for (let letter of text) {
        const span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        container.appendChild(span);
    }

    return container;
}

// Call the initialization function after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    initializePageInteractions();
});