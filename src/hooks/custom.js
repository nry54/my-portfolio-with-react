let typedInstances = [];

// Define the routes for navigation
const routes = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/resume", label: "Resume" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];

// Cache the routes length for better performance
const routesLength = routes.length;

// Current route index for wheel navigation
let currentRouteIndex = 0;

function initTyped() {
  const typedElements = document.querySelectorAll("span.typed");

  typedElements.forEach((element) => {
    const items = element.dataset.typeItems
      ? element.dataset.typeItems.split(",").map((item) => item.trim())
      : ["Default text"];
    let instance = {
      element: element,
      texts: items,
      currentTextIndex: 0,
      currentCharIndex: 0,
      isDeleting: false,
      typingSpeed: 100,
      deletingSpeed: 50,
      pauseTime: 1500,
    };

    typedInstances.push(instance);
    typeText(instance);
  });
}

function typeText(instance) {
  const { element, texts, currentTextIndex, currentCharIndex, isDeleting } =
    instance;
  const currentText = texts[currentTextIndex];

  if (isDeleting) {
    // Remove char
    element.textContent = currentText.substring(0, currentCharIndex - 1);
    instance.currentCharIndex--;
    instance.typingSpeed = instance.deletingSpeed;
  } else {
    // Add char
    element.textContent = currentText.substring(0, currentCharIndex + 1);
    instance.currentCharIndex++;
    instance.typingSpeed = 100;
  }

  let delay = instance.typingSpeed;

  if (!isDeleting && currentCharIndex === currentText.length) {
    // End of typing current text
    delay = instance.pauseTime;
    instance.isDeleting = true;
  } else if (isDeleting && currentCharIndex === 0) {
    // End of deleting current text
    instance.isDeleting = false;
    instance.currentTextIndex =
      (instance.currentTextIndex + 1) % instance.texts.length;
  }

  setTimeout(() => typeText(instance), delay);
}

// Mouse wheel navigation function
function handleWheelNavigation(event) {
  // Prevent default scrolling behavior
  event.preventDefault();

  // Determine direction (positive = down, negative = up)
  const delta = event.deltaY;

  if (delta > 0) {
    // Scroll down - go to next page
    currentRouteIndex = (currentRouteIndex + 1) % routesLength;
  } else {
    // Scroll up - go to previous page
    currentRouteIndex = (currentRouteIndex - 1 + routesLength) % routesLength;
  }

  // Navigate to the new route
  navigateToRoute(routes[currentRouteIndex].path);
}

// Navigation function that works with React Router
function navigateToRoute(path) {
  // Navigate to the route using React Router
  window.history.pushState({}, "", path);
  // Dispatch a popstate event to notify React Router // The content changes without the page being refreshed
  window.dispatchEvent(new PopStateEvent("popstate"));
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTyped);
} else {
  initTyped();
}

// Re-initialize when page content changes (for SPA navigation)
window.addEventListener("load", initTyped);

// Add mouse wheel event listener for navigation
document.addEventListener("wheel", handleWheelNavigation, { passive: false });

// Listen for popstate events (back/forward buttons)
window.addEventListener("popstate", function () {
  // This will trigger React Router to update
});
