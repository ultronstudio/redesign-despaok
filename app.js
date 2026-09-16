document.querySelectorAll('#mobileNav a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('mobileNav');
    const instance = bootstrap.Offcanvas.getInstance(menu);
    if (instance) instance.hide();
  });
});
