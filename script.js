// MENU MOBILE

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {

hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('#nav-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

}

// FAQ

document.querySelectorAll('.faq-header').forEach(function (button) {

button.addEventListener('click', function () {

    const item = button.parentElement;
    const content = item.querySelector('.faq-content');

    document.querySelectorAll('.faq-item').forEach(function (faq) {
        if (faq !== item) {
            faq.classList.remove('active');
            faq.querySelector('.faq-content').style.maxHeight = null;
        }
    });

    item.classList.toggle('active');

    if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.style.maxHeight = null;
    }

});

});

// ANO AUTOMÁTICO

const ano = document.getElementById('ano');

if (ano) {
ano.textContent = new Date().getFullYear();
}
