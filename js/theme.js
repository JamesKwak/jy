const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  const isLightMode = body.classList.contains('light-mode');
  body.classList.toggle('light-mode', !isLightMode);
  body.classList.toggle('dark-mode', isLightMode);

  themeIcon.src = isLightMode
    ? 'assets/light-mode-icon.png'
    : 'assets/dark-mode-icon.png';
});
