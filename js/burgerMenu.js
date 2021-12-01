
let burger = document.querySelector('#nav-icon2')
let burgerMenu = document.querySelector('.header__burger-menu')
let filter= document.querySelector('.background-filter')

export const burguerManagement = () => {

    burger.addEventListener("click", function () { 
        toggleBurgerMenu()
    })

    filter.addEventListener("click", function () { 
        toggleBurgerMenu()
    })  
}

function toggleBurgerMenu() {
    
    if (burgerMenu.classList.contains("unCollapse")) {
        burgerMenu.classList.remove("unCollapse")
        burger.classList.remove("open")
        filter.classList.remove("apply")
    } else {
        burgerMenu.classList.add("unCollapse")
        burger.classList.add("open")
        filter.classList.add("apply")
    }
}