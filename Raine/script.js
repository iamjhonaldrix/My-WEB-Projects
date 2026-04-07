const hamburgerBtn = document.getElementById('hamburger-btn');
const menuLinks = document.getElementById('menu-links');

hamburgerBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
});
