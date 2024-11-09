const toggleThemeButton = document.querySelector('.toggle-theme');

toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'ligth';
  localStorage.setItem('theme', theme);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
}
