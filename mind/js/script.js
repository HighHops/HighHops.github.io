const hamburger = document.querySelector('.hamburger'),
      mobileMenu = document.querySelector('.menu__mobile');

hamburger.addEventListener('click',(e) => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active') ) {
        document.querySelector('body').style.overflowY = 'hidden';
    }
    else {
        document.querySelector('body').style.overflowY = '';
    }

});