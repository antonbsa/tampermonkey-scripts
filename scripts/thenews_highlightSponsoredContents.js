'use strict';

const highlightMatchingElements = () => {
  const contentBlocks = document.getElementById('content-blocks');
  const directChildren = Array.from(contentBlocks.children);

  directChildren.map(child => {
    const firstBold = child.querySelector('b'); // first <b> inside this child (title)
    if (firstBold && firstBold.textContent.includes('APRESENTADO POR')) {
      child.style.backgroundColor = '#f56565'; // tailwindcss red-500
    }
  });
}

// Run the function if page is already loaded, or add an event listener otherwise
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', highlightMatchingElements);
} else {
  highlightMatchingElements();
}