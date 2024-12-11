// 메인 페이지로 이동 (임시 링크 예제)
const introImage = document.querySelector('.intro-image');
introImage.addEventListener('click', () => {
  alert('메인 페이지로 이동합니다!');
  // 실제 메인 페이지 URL로 변경
  window.location.href = 'main.html';
});

// 테마 토글
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  const isLightMode = body.classList.contains('light-mode');

  // 테마 변경
  body.classList.toggle('light-mode', !isLightMode);
  body.classList.toggle('dark-mode', isLightMode);

  // 아이콘 변경
  themeIcon.src = isLightMode
    ? 'assets/light-mode-icon.png'
    : 'assets/dark-mode-icon.png';
});