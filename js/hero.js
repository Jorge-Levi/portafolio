// Typewriter effect for hero title
function typewriterEffect(elementId, typingSpeed) {
  const element = document.getElementById(elementId);
  const fullText = element.innerHTML;
  element.innerHTML = "";
  let currentIndex = 0;

  function typeWriter() {
    if (currentIndex < fullText.length) {
      element.innerHTML += fullText.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeWriter, typingSpeed);
    }
  }

  typeWriter();
}

// Initialize typewriter effect after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  typewriterEffect("hero-title", 100);
});
