let burger= document.querySelector('.header__burger')
let burgerMenu= document.querySelector('.header__burger-menu')
burger.addEventListener("click", function(){toggleBurgerMenu()},false)
burgerMenu.classList.add("collapse")
function toggleBurgerMenu(){
    if(burgerMenu.classList.contains("collapse")){
        burgerMenu.classList.remove("collapse")
    }else{
        burgerMenu.classList.add("collapse")
    }
}