##The JavaScript Files here##

const mobileNav = document.querySelector('.mobileHeader')
const cancelIcon = document.querySelector('#cancelIcon')
const hamBurgerMenu = document.querySelector('.hamBurger')
const containers = document.querySelectorAll('.container')
const buttons = document.querySelectorAll('.container div div button')
const headers = document.querySelectorAll('.container div h3')

/*Stay here and wait for me to come because I also know a thing or two for you*/


function handleHamburgerClick(){
    mobileNav.style.display = 'block';
}

hamBurgerMenu.addEventListener('click', handleHamburgerClick)
cancelIcon.addEventListener('click', ()=>{
    mobileNav.style.display = 'none'
})
