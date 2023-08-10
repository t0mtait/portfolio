const darkModeToggle = document.querySelector('#darkModeToggle');
const toggleLabel = document.querySelector('.toggle-label');

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    toggleLabel.style.left = '20px';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    toggleLabel.style.left = '2px';
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Set initial mode based on user preference or default
if (localStorage.getItem('darkMode') === 'enabled') {
  darkModeToggle.checked = true;
  document.body.classList.add('dark');
  toggleLabel.style.left = '20px';
} else {
  darkModeToggle.checked = false;
  document.body.classList.add('light');
  toggleLabel.style.left = '2px';
}
