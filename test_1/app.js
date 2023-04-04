##The JavaScript Files here##

const mobileNav = document.querySelector('.mobileHeader')
const cancelIcon = document.querySelector('#cancelIcon')
const hamBurgerMenu = document.querySelector('.hamBurger')
const containers = document.querySelectorAll('.container')
const buttons = document.querySelectorAll('.container div div button')
const headers = document.querySelectorAll('.container div h3')


function handleHamburgerClick(){
    mobileNav.style.display = 'block';
}

hamBurgerMenu.addEventListener('click', handleHamburgerClick)
cancelIcon.addEventListener('click', ()=>{
    mobileNav.style.display = 'none'
})
