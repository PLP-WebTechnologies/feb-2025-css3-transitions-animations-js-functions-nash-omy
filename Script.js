// Function to save theme preference in localStorage
function saveTheme(theme) {
  localStorage.setItem('userTheme', theme);
}

// Function to apply theme from localStorage
function applySavedTheme() {
  const savedTheme = localStorage.getItem('userTheme') || 'light';
  document.body.className = savedTheme;
  document.getElementById('themeSelect').value = savedTheme;
}

// When theme is changed
document.getElementById('themeSelect').addEventListener('change', function () {
  const selectedTheme = this.value;
  document.body.className = selectedTheme;
  saveTheme(selectedTheme);
});

// Animation on button click
const animateBtn = document.getElementById('animateBtn');
animateBtn.addEventListener('click', function () {
  // Add the animation class
  animateBtn.classList.add('animated');

  // Remove the animation class after it finishes (clean up)
  setTimeout(() => {
    animateBtn.classList.remove('animated');
  }, 500);
});

// Apply saved theme when the page loads
window.onload = applySavedTheme;
