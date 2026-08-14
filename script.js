document.querySelectorAll('#nav-menu a').forEach(link => { link.addEventListener('click', () => { navMenu.classList.remove('active'); hamburger.classList.remove('active'); }); }); }
document.querySelectorAll('.faq-header').forEach(button => { button.addEventListener('click', () => { const item = button.parentElement; item.classList.toggle('active'); }); });
const ano = document.getElementById('ano'); if (ano) { ano.textContent = new Date().getFullYear(); }
