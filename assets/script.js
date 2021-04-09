let menu = document.getElementById('menu');
let nav = document.querySelector('.header__menu--nav');

menu.addEventListener('click', () => {
    if (nav.style.display != 'block') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});
