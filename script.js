const mobileBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
mobileBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});