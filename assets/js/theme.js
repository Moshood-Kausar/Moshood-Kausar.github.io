(function () {
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  var sun = btn.querySelector('.icon-sun');
  var moon = btn.querySelector('.icon-moon');

  function updateIcons() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    sun.style.display = isDark ? 'block' : 'none';
    moon.style.display = isDark ? 'none' : 'block';
  }

  updateIcons();

  btn.addEventListener('click', function () {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    var next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcons();
  });
})();
