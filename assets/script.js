let menu = document.getElementById('menu');
let nav = document.querySelector('.header__menu--nav');
let optionSelected = document.querySelectorAll('.option--item .button--ca');

menu.addEventListener('click', () => {
    if (nav.style.display != 'block') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});

for (let i = 0; i < optionSelected.length; i++) {
    let element = optionSelected[i];
    let modal = document.querySelector('.container--modal');

    element.addEventListener('click', (e) => {
        console.log(e.target);
        modal.style.display = 'block'
    })
}