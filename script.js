const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : '');
});

// Set theme from local storage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}
