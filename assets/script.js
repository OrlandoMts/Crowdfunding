let menu = document.getElementById('menu');
let nav = document.querySelector('.header__menu--nav');
let optionSelected = document.querySelectorAll('.option--item .button--ca');
let backProject = document.querySelector('.buttons__container .button--ca');

menu.addEventListener('click', () => {
    if (nav.style.display != 'block') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});

for (let i = 0; i < optionSelected.length; i++) {
    let element = optionSelected[i];
    let modal = document.querySelector('.container--modal'); //Padre

    element.addEventListener('click', () => {
        // let body = document.getElementById('body');
        
        modal.style.display = 'block';
        // let widthScreen = window.screen.width;
        // console.log(widthScreen);
        // body.className = 'modal--background';
        // Creo que debo llamar una clase de ccs que aplique un background transparente a todo el documento, aun no la creo
        if (modal.style.display == 'block') {
            let closeModal = document.querySelector('.about--modal-close img');
            
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
    });
}

backProject.addEventListener('click', (e) => {
    let modalBack = document.querySelector('.back__container');
    
    if (modalBack.style.display != 'flex') {
        modalBack.style.display = 'flex';
        let buttonBack = document.querySelector('.back__container .button--ca');
        
        buttonBack.addEventListener('click', () => {
            modalBack.style.display = 'none';
        });
    }
});