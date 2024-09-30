const scrollContainer = document.querySelector('.scroll-container');
const customScrollbarThumb = document.querySelector('.custom-scrollbar-thumb');

// Function to update the custom scrollbar thumb based on scroll position
function updateScrollbar() {
    const scrollPercentage = (scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth)) * 100;
    customScrollbarThumb.style.width = `${scrollPercentage}%`;
}

// Add event listener for scroll event on the scroll container
scrollContainer.addEventListener('scroll', updateScrollbar);

// Initialize the scrollbar position on load
window.addEventListener('load', updateScrollbar);