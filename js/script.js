let burger = document.querySelector('#nav-icon2')
let burgerMenu = document.querySelector('.header__burger-menu')
let filter= document.querySelector('.background-filter')
burger.addEventListener("click", function () { toggleBurgerMenu() }, false)
filter.addEventListener("click", function () { toggleBurgerMenu() }, false)

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

window.onscroll = function() { showProgress()};

function showProgress() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".scroller__progress").style.width = scrolled + "%";
}