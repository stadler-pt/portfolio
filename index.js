const navToggler = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav__item")

navToggler.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open")
    })
})

window.addEventListener("scroll", () => {
    const nav = document.querySelector("header")
    if (window.pageYOffset > 90) {
        nav.style.boxShadow = "0px 15px 20px -15px #000"
    } else {
        nav.style.boxShadow = "none"
    }
})

document.querySelector(".head__img").style.opacity = "1"
document.querySelector(".about__img").style.opacity = "1"